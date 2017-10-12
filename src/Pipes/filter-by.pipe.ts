import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'filterBy'
})
@Injectable()
export class FilterByPipe implements PipeTransform {
  transform(items: any[], filter, prop = null): any {
    if (!items || !filter) {
      return items;
    }
    let props = Object.keys(items[0]);
    let newArray = [];
    for (let i = 0; i < items.length; i++) {
      let check = 0;
      for (let j = 0; j < props.length; j++) {
        if (prop != null || prop === '') {
          let val = items[i][prop];
          if (!(typeof val === 'object') && !Array.isArray(val)) {
            if (val.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
              check++;
            }
          }
        } else {
          let val = items[i][props[j]];
          if (!(typeof val === 'object') && !Array.isArray(val)) {
            if (val.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
              check++;
            }
          }
        }
      }
      if (check > 0) {
        newArray.push(items[i]);
      }
    }
    return newArray;
  }
}
