import { NgModule } from '@angular/core';
import { CardItemComponent } from './card-item.component';
import { CommonModule } from '@angular/common';
import { RedirectOnClickDirectiveModule } from '../../directives/redirect-on-click/redirect-on-click.directive-module';
import { EmployeeTitleModule } from '../../pipes/employee-title/employee-title.module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    RedirectOnClickDirectiveModule,
    EmployeeTitleModule,
    AvatarListComponentModule,
  ],
  declarations: [CardItemComponent],
  providers: [],
  exports: [CardItemComponent],
})
export class CardItemComponentModule {}
