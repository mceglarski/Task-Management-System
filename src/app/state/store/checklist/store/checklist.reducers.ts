import { ChecklistState } from './checklist.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import {
  loadCheckList,
  loadCheckListFailure,
  loadCheckListSuccess,
} from './checklist.actions';

export const initialState: ChecklistState = {
  checkList: [],
  error: null,
  status: StatusTypes.Pending,
};

export const checkListReducers = createReducer(
  initialState,
  on(loadCheckList, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadCheckListSuccess, (state, { checkList }) => ({
    ...state,
    checkList: checkList,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadCheckListFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
