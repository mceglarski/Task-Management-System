import { NgModule } from '@angular/core';
import { CardItemComponent } from './card-item.component';
import { CommonModule } from '@angular/common';
import { RedirectOnClickDirectiveModule } from '../../directives/redirect-on-click/redirect-on-click.directive-module';
import { EmployeeTitleModule } from '../../pipes/employee-title/employee-title.module';

@NgModule({
  imports: [CommonModule, RedirectOnClickDirectiveModule, EmployeeTitleModule],
  declarations: [CardItemComponent],
  providers: [],
  exports: [CardItemComponent],
})
export class CardItemComponentModule {}
