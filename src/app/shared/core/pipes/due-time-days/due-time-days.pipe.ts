import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dueTimeDays' })
export class DueTimeDaysPipe implements PipeTransform {
  transform(dueDate: Date, isEpoch: boolean = false): string {
    const currentDate = new Date();
    const targetDate = new Date(dueDate);
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return `Due ${daysLeft} days`;
  }
}
