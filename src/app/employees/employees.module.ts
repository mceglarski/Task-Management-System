import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { CommonModule } from '@angular/common';
import { PageHeaderComponentModule } from '../core/components/page-header/page-header.component-module';
import { EmployeesRoutingModule } from './employees-routing';

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule, PageHeaderComponentModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
