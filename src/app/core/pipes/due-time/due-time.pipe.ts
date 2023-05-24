import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'dueTime' })
export class DueTimePipe implements PipeTransform {
  transform(dueTime: Date): string {
    return `Due on ${formatDate(dueTime, 'MMM d, y', 'en-US')}`;
  }
}
