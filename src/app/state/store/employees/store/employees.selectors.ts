import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.store';
import { EmployeeModel } from '../../../models/employee.model';

export const selectEmployees = (state: AppState) => state.employees;
export const selectAllEmployees = createSelector(
  selectEmployees,
  (state: EmployeesState) => state.employees
);
export const selectEmployeesStatus = createSelector(
  selectEmployees,
  (state: EmployeesState) => state.status
);

export const selectEmployeeById = (id: string) =>
  createSelector(selectEmployees, (state: EmployeesState) =>
    state.employees.find((emp: EmployeeModel) => emp.id === id)
  );
