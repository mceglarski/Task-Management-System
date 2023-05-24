import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { TasksState } from './tasks.store';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks
);
