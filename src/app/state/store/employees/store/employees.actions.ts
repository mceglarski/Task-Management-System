import { createAction, props } from '@ngrx/store';
import { EmployeeModel } from '../../../models/employee.model';

export enum EmployeesActionsTypes {
  LoadEmployeesRequest = '[Employees] Load Employees Request',
  LoadEmployeesSuccess = '[Employees] Load Employees Success',
  LoadEmployeesFailure = '[Employees] Load Employees Failure',
}

export const loadEmployees = createAction(
  EmployeesActionsTypes.LoadEmployeesRequest
);

export const loadEmployeesSuccess = createAction(
  EmployeesActionsTypes.LoadEmployeesSuccess,
  props<{ employees: EmployeeModel[] }>()
);

export const loadEmployeesFailure = createAction(
  EmployeesActionsTypes.LoadEmployeesFailure,
  props<{ error: string }>()
);
