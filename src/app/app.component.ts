import { Component, OnInit } from '@angular/core';

import { SheetsService } from './sheets.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = `Jack's Wurm Sales`;

  groups: Category[] = [];
  prices: Item[] = [];
  sales: any;
  chainItems: any;
  plateItems: any;

  constructor(private sheetsService: SheetsService) {
  }

  ngOnInit() {
    this.sheetsService.getPrices().subscribe(data => {
      let sheet: SpreadSheet = data as SpreadSheet;
      let valueRanges = sheet.valueRanges;

      let values: any[] = valueRanges[0]["values"];

      console.log("Values", values)

      let mappedItems = values.map(p => {
        
        let i = <Item>({
          Name: p[0],
          Type: p[1],
          Class: p[2],
          QL: p[3],
          QL_Cost: p[4],
          Material: p[5],
          Material_Multiplier: p[6],
          Base_Cost: p[7],
          AoSP: p[8],
          AoSP_Cost: p[9],
          CoC: p[10],
          CoC_Cost: p[11],
          WoA: p[12],
          WoA_Cost: p[13],
          Price: p[14],
          Copper_Price: p[15],
          Sold: p[16] === "TRUE" ? true : false,
          Discount: p[17],
          Discount_Reason: p[18],
          Rarity: p[19]
        })

        if (i.Discount) {
          i.Price = (100 - i.Discount) * i.Price / 100;
        }

        if (i.Rarity) {
          i.Rarity = parseInt(i.Rarity.toString());
        }
        
        return i;
      });

      this.prices = mappedItems.filter(i => i.Name != "")

      console.log("Prices", this.prices);

      let grouped = _.groupBy(this.prices, p => p.Type);

      Object.keys(grouped).forEach(key => {
        let value = grouped[key];

        let newCat = <Category>({
          Name: key,
          Items: value
        });

        this.groups = [...this.groups,  newCat];
      });

      console.log("Groups", this.groups);
    });
  }
}

export interface SpreadSheet {
  spreadsheetId: string;
  valueRanges: any[];
}

export interface Item {
  Name: string;
  Type: string;
  Class: string;
  QL: number;
  QL_Cost: number;
  Material: string;
  Material_Multiplier: number;
  Base_Cost: number;
  AoSP: number;
  AoSP_Cost: number;
  CoC: number;
  CoC_Cost: number;
  WoA: number;
  WoA_Cost: number;
  Price: number;
  Copper_Price: number;
  Sold: boolean;
  Discount: number;
  Discount_Reason: string;
  Rarity: number;
}

export interface Category {
  Name: string;
  Items: Item[];
}

