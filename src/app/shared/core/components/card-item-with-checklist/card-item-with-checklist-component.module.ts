import { NgModule } from '@angular/core';
import { CardItemWithChecklistComponent } from './card-item-with-checklist.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CardItemWithChecklistComponent],
  providers: [],
  exports: [CardItemWithChecklistComponent],
})
export class CardItemWithChecklistComponentModule {}
