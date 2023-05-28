import { NgModule } from '@angular/core';
import { CardLongItemComponent } from './card-long-item.component';
import { CommonModule } from '@angular/common';
import { ChecklistProgressModule } from '../../pipes/checklist-progress/checklist-progress.module';
import { RedirectOnClickDirectiveModule } from '../../directives/redirect-on-click/redirect-on-click.directive-module';

@NgModule({
  imports: [
    CommonModule,
    ChecklistProgressModule,
    RedirectOnClickDirectiveModule,
  ],
  declarations: [CardLongItemComponent],
  providers: [],
  exports: [CardLongItemComponent],
})
export class CardLongItemComponentModule {}
