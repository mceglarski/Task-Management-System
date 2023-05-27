import { NgModule } from '@angular/core';
import { CardItemChecklistComponent } from './card-item-checklist.component';
import { CommonModule } from '@angular/common';
import { ChecklistProgressModule } from '../../pipes/checklist-progress/checklist-progress.module';
import {RedirectOnClickDirectiveModule} from "../../directives/redirect-on-click/redirect-on-click.directive-module";

@NgModule({
    imports: [CommonModule, ChecklistProgressModule, RedirectOnClickDirectiveModule],
  declarations: [CardItemChecklistComponent],
  providers: [],
  exports: [CardItemChecklistComponent],
})
export class CardItemChecklistComponentModule {}
