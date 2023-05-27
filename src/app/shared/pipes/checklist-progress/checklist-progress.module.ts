import { NgModule } from '@angular/core';
import { CheckListProgressPipe } from './checklist-progress.pipe';

@NgModule({
  declarations: [CheckListProgressPipe],
  exports: [CheckListProgressPipe],
})
export class ChecklistProgressModule {}
