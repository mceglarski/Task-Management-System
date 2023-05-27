import { NgModule } from '@angular/core';
import { CardItemChecklistComponent } from './card-item-checklist.component';
import { CommonModule } from '@angular/common';
import { ChecklistProgressModule } from '../../pipes/checklist-progress/checklist-progress.module';

@NgModule({
  imports: [CommonModule, ChecklistProgressModule],
  declarations: [CardItemChecklistComponent],
  providers: [],
  exports: [CardItemChecklistComponent],
})
export class CardItemChecklistComponentModule {}
