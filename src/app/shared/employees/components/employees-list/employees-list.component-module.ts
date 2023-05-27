import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list.component';
import { SimpleMediaItemComponentModule } from '../../../core/components/simple-media-item/simple-media-item.component-module';
import { CommonModule } from '@angular/common';
import {
    RedirectOnClickDirectiveModule
} from "../../../core/directives/redirect-on-click/redirect-on-click.directive-module";

@NgModule({
    imports: [SimpleMediaItemComponentModule, CommonModule, RedirectOnClickDirectiveModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent],
})
export class EmployeesListComponentModule {}
