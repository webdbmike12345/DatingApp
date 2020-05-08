import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeAGoME'
})
export class TimeAGoMEPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
