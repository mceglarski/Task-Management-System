import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { CommonModule } from '@angular/common';
import { PageHeaderComponentModule } from '../shared/core/components/page-header/page-header.component-module';
import { EmployeesRoutingModule } from './employees-routing';
import { EmployeesListComponentModule } from '../shared/employees/components/employees-list/employees-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    PageHeaderComponentModule,
    EmployeesListComponentModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
