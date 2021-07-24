import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  // https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8HPukqJrHVQhMESFzwIFR9EPGUsHDCT8rWRds0ZoQ-AWkRhYvjaYCXJPeRylBzDuhBbEO_Z4OXYz_/pubhtml?gid=0&single=true
  // https://docs.google.com/spreadsheets/d/1w_wzDd6wlrFnRGyOjWZLfAA8U3PuLE9ddwd5HK12FHc/edit?usp=sharing

  private v4API = "https://sheets.googleapis.com/v4/spreadsheets";
  private priceSheet = '1w_wzDd6wlrFnRGyOjWZLfAA8U3PuLE9ddwd5HK12FHc';
  private priceSheetRange = 'ranges=A2:Q500';
  // "ranges=Deeds!A2:D";

  private yourMotherSmokesCrack = 'AIzaSyDi4nKWGegwmPuesj8GLa3kRaiFw0I-v2g';

  //private _v4SheetsAPIXanaduCombinedData: string = `${this.v4API}/${this.xanaduSheetId}/values:batchGet?${this.q1}&${this.q2}&${this.q3}&${this.q4}&key=${this.yourMotherSmokesCrack}`;
  private _v4SheetsAPIPriceData: string = `${this.v4API}/${this.priceSheet}/values:batchGet?${this.priceSheetRange}&key=${this.yourMotherSmokesCrack}`;

  constructor(private http: HttpClient) { }

  getPrices() {
    return this.http.get(this._v4SheetsAPIPriceData);
  }
}
