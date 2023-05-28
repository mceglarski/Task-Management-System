import { ChecklistState } from './checklist.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import {
  loadChecklist,
  loadChecklistFailure,
  loadChecklistSuccess,
} from './checklist.actions';

export const initialState: ChecklistState = {
  checkList: [],
  error: null,
  status: StatusTypes.Pending,
};

export const checkListReducers = createReducer(
  initialState,
  on(loadChecklist, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadChecklistSuccess, (state, { checkList }) => ({
    ...state,
    checkList: checkList,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadChecklistFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
