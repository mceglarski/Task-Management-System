import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list.component';
import { SimpleMediaItemComponentModule } from '../../../core/components/simple-media-item/simple-media-item.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SimpleMediaItemComponentModule, CommonModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent],
})
export class EmployeesListComponentModule {}
