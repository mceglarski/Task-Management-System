import { EmployeeModel } from '../../../models/employee.model';
import { StatusTypes } from '../../../common/status.types';

export interface EmployeesState {
  readonly employees: EmployeeModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
