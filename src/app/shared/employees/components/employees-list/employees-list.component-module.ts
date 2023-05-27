import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list.component';
import { CommonModule } from '@angular/common';
import {
    RedirectOnClickDirectiveModule
} from "../../../core/directives/redirect-on-click/redirect-on-click.directive-module";
import {
  SimpleMediaItemComponentModule
} from "../../../core/components/simple-media-item/simple-media-item.component-module";
import {EmployeeTitleModule} from "../../../core/pipes/employee-title/employee-title.module";

@NgModule({
  imports: [SimpleMediaItemComponentModule, CommonModule, RedirectOnClickDirectiveModule, EmployeeTitleModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent],
})
export class EmployeesListComponentModule {}
