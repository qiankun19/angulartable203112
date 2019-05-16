import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? 
    value.filter((item, index) => {
      if (item.firstName.indexOf(args.toLowerCase()) !== -1) {
        return true;
      }
    }): value;
  }

}