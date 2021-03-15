import { Pipe, PipeTransform } from '@angular/core';
import { Summary } from './models/summary';

@Pipe({
  name: 'filePipe'
})
export class FilePipePipe implements PipeTransform {

  transform(value: Summary[], input: string): any {
    if (input) {
      return value.filter(val => val.title.indexOf(input) >= 0);
    } else {
      return null;
    }  }

}
