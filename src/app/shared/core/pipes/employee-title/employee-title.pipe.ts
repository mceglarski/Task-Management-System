import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeItemModel } from '../../../employees/models/employee-item.model';

@Pipe({ name: 'employeeTitle' })
export class EmployeeTitlePipe implements PipeTransform {
  transform(emp: EmployeeItemModel): string {
    return `${emp.firstName} ${emp.lastName}`;
  }
}
