import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(val: number): string {
    if(isNaN(val)) {
      return "NaN";
    }

    let silverFraction = val / 10000;

    let silvers = parseInt(silverFraction.toString());
    let coppers = Math.ceil((silverFraction - silvers) * 100); 

    if (silverFraction >= 1 && coppers === undefined) {
      return `${silvers}s`;
    }

    if (silverFraction >= 1 && coppers != undefined) {
      return `${silvers}s${coppers}c`;
    }
    
    if (silverFraction < 1 && coppers != undefined) {
      return `${coppers}c`;
    }


    return "0";
  }

}
