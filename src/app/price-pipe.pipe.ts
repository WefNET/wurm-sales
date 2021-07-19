import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(val: number): string {
    if(isNaN(val)) {
      return "NaN";
    }

    // coppers
    if (val >= 100 && val <= 9999) {
      let copper = val / 100;

      return `${copper}c`;
    }

    return "0";
  }

}
