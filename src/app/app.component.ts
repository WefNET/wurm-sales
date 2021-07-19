import { Component } from '@angular/core';

import SalesJson from './../assets/sales.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = `Jack's Wurm Sales`;

  sales: any;
  chainItems: any;
  plateItems: any;

  constructor() {
    this.sales = SalesJson;
    console.log("Sales", this.sales);

    let categories: any[] = this.sales.armor.categories;
    console.log("Cat", categories);
    
    this.chainItems = categories.filter(c => c.type === "Chain");

    console.log("Chain", this.chainItems);

    this.plateItems = categories.filter(c => c.type === "Plate");

    console.log("Plate", this.plateItems);
  }
}
