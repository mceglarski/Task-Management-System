import { NgModule } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
import { EmployeeTitleModule } from '../../pipes/employee-title/employee-title.module';
import { CommonModule } from '@angular/common';
import { RedirectOnClickDirectiveModule } from '../../directives/redirect-on-click/redirect-on-click.directive-module';

@NgModule({
  imports: [EmployeeTitleModule, CommonModule, RedirectOnClickDirectiveModule],
  declarations: [AvatarListComponent],
  providers: [],
  exports: [AvatarListComponent],
})
export class AvatarListComponentModule {}
