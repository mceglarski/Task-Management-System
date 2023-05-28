import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { EmployeeItemComponent } from '../employee/employee-item.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
