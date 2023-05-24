import { EmployeesState } from './employees.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import {
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employees.actions';

export const initialState: EmployeesState = {
  employees: [],
  error: null,
  status: StatusTypes.Pending,
};

export const employeesReducers = createReducer(
  initialState,
  on(loadEmployees, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadEmployeesFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
