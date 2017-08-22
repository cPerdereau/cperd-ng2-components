import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'filterBy'
})
@Injectable()
export class FilterByPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    let props = Object.keys(items[0]);
    let newArray = [];
    for (let i = 0; i < items.length; i++) {
      let check = 0;
      for (let j = 0; j < props.length; j++) {
        let val = items[i][props[j]];
        if (val.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          check++;
        }
      }
      if (check > 0) {
        newArray.push(items[i]);
      }
    }
   // return items;
    return newArray;
  }
}
