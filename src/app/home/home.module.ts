import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing';
import { PageHeaderComponentModule } from '../shared/core/components/page-header/page-header.component-module';
import { CommonModule } from '@angular/common';
import {TeamsListComponentModule} from "../shared/teams/components/teams-list/teams-list.component-module";
import {
  EmployeesListComponentModule
} from "../shared/employees/components/employees-list/employees-list.component-module";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, PageHeaderComponentModule, TeamsListComponentModule, EmployeesListComponentModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
