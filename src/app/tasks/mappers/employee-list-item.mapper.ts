import { EmployeeModel } from '../../state/models/employee.model';
import { EmployeeListItemModel } from '../models/employee-list-item.model';

export namespace EmployeeListItemMapper {
  export function employeeElementToListItemMapper(
    employee: EmployeeModel | undefined
  ): EmployeeListItemModel {
    return {
      id: employee?.id,
      firstName: employee?.firstName,
      lastName: employee?.lastName,
      avatarUrl: employee?.avatarUrl,
    };
  }
}
