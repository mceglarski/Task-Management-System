import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'dueTime' })
export class DueTimePipe implements PipeTransform {
  transform(dueTime: Date, isEpoch: boolean = false): string {
    let dueTimeResult = dueTime;
    if (isEpoch) {
      dueTimeResult = new Date(+dueTime * 1000);
    }
    return `Due on ${formatDate(dueTimeResult, 'MMM d, y', 'en-US')}`;
  }
}
