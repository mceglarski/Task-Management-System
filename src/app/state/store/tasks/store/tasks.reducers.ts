import { TasksState } from './tasks.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import { loadTasks, loadTasksSuccess } from './tasks.actions';
import { loadChecklistFailure } from '../../checklist/store/checklist.actions';

export const initialState: TasksState = {
  tasks: [],
  error: null,
  status: StatusTypes.Pending,
};

export const tasksReducers = createReducer(
  initialState,
  on(loadTasks, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadChecklistFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
