import { EmployeeModel } from '../../../state/models/employee.model';
import { EmployeeListItemModel } from '../models/employee-list-item.model';

export namespace EmployeeListItemMapper {
  export function employeeToListItemMapper(
    employees: EmployeeModel[]
  ): EmployeeListItemModel[] {
    return employees.map((emp: EmployeeModel) => ({
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      position: emp.position,
      avatarUrl: emp.avatarUrl,
    }));
  }
}
