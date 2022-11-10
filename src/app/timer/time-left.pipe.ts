import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: number): string {
    return value > 0 ? value + "m" : "0m";
  }

}
