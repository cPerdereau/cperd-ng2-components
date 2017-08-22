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
    console.log(items);
    console.log(props);
    let newArray = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < props.length; j++) {
        newArray.push(items[i][j].toString().toLowerCase() !== -1);
      }
    }
    console.log(newArray);
    return newArray;
  }
}
