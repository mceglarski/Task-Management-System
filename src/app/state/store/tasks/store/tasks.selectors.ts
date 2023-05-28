import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { TasksState } from './tasks.store';
import { TaskModel } from '../../../models/task.model';

export const selectTasks = (state: AppState) => state.tasks;
export const selectAllTasks = createSelector(
  selectTasks,
  (state: TasksState) => state.tasks
);

export const selectTasksStatus = createSelector(
  selectTasks,
  (state: TasksState) => state.status
);

export const selectTasksByProjectId = (id: string) =>
  createSelector(selectTasks, (state: TasksState) =>
    state.tasks.filter((task: TaskModel) => task.projectId === id)
  );

export const selectTasksByProjectIds = (projectIds: string[]) =>
  createSelector(selectTasks, (state: TasksState) =>
    projectIds.map((id) =>
      state.tasks.filter((task: TaskModel) => task.projectId === id)
    )
  );
