import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { EmployeesState } from './employees.store';

export const selectEmployees = (state: AppState) => state.employees;
export const selectAllEmployees = createSelector(
  selectEmployees,
  (state: EmployeesState) => state.employees
);
