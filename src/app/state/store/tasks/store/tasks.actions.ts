import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../../models/task.model';

export enum TasksActionsTypes {
  LoadTasksRequest = '[Tasks Page] Load Tasks Request',
  LoadTasksSuccess = '[Tasks Page] Load Tasks Success',
  LoadTasksFailure = '[Tasks Page] Load Tasks Failure',
}

export const loadTasks = createAction(TasksActionsTypes.LoadTasksRequest);

export const loadTasksSuccess = createAction(
  TasksActionsTypes.LoadTasksSuccess,
  props<{ tasks: TaskModel[] }>()
);

export const loadTasksFailure = createAction(
  TasksActionsTypes.LoadTasksFailure,
  props<{ error: string }>()
);
