import { NgModule } from '@angular/core';
import { DueTimePipe } from './due-time.pipe';

@NgModule({
  declarations: [DueTimePipe],
  exports: [DueTimePipe],
})
export class DueTimeModule {}
