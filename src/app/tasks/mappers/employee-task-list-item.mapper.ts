import { EmployeeModel } from '../../state/models/employee.model';
import { EmployeeTaskListItemModel } from '../models/employee-task-list-item.model';

export namespace EmployeeTaskListItemMapper {
  export function employeeElementToListItemMapper(
    employee: EmployeeModel | undefined
  ): EmployeeTaskListItemModel {
    return {
      id: employee?.id || '',
      firstName: employee?.firstName || '',
      lastName: employee?.lastName || '',
      avatarUrl: employee?.avatarUrl || '',
    };
  }
}
