import { EmployeeModel } from '../../../state/models/employee.model';
import { EmployeeItemModel } from '../models/employee-item.model';

export namespace EmployeeListItemMapper {
  export function employeesToListItemMapper(
    employees: EmployeeModel[]
  ): EmployeeItemModel[] {
    return employees.map((emp: EmployeeModel) => ({
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      position: emp.position,
      avatarUrl: emp.avatarUrl,
    }));
  }

  export function employeeToListItemMapper(
    employee: EmployeeModel | undefined
  ): EmployeeItemModel {
    return {
      id: employee?.id || '',
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      position: employee?.position || '',
      avatarUrl: employee?.avatarUrl || '',
    }
  }
}
