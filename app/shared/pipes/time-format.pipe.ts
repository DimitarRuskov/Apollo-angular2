import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeFormat'})
export class TimeFormatPipe implements PipeTransform {

  transform(value: any): string {
    let val = parseInt(value);
    let minutes = (Math.floor(val / 60) < 10) ? '0' + Math.floor(val / 60) : Math.floor(val / 60)
    let seconds = (Math.floor(val % 60) < 10) ? '0' + Math.floor(val % 60) : Math.floor(val % 60)
    return minutes + 'm ' + seconds + 's';
  }

}