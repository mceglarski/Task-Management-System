import { NgModule } from '@angular/core';
import { EmployeeTitlePipe } from './employee-title.pipe';

@NgModule({
  declarations: [EmployeeTitlePipe],
  exports: [EmployeeTitlePipe],
})
export class EmployeeTitleModule {}
