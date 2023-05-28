import { NgModule } from '@angular/core';
import { DueTimeDaysPipe } from './due-time-days.pipe';

@NgModule({
  declarations: [DueTimeDaysPipe],
  exports: [DueTimeDaysPipe],
})
export class DueTimeDaysModule {}
