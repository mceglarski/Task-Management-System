import { createAction, props } from '@ngrx/store';
import { ProjectModel } from '../../../models/project.model';

export enum ProjectsActionsTypes {
  LoadProjectsRequest = '[Project Page] Load Projects Request',
  LoadProjectsSuccess = '[Project Page] Load Projects Success',
  LoadProjectsFailure = '[Project Page] Load Projects Failure',
}

export const loadProjects = createAction(
  ProjectsActionsTypes.LoadProjectsRequest
);

export const loadProjectsSuccess = createAction(
  ProjectsActionsTypes.LoadProjectsSuccess,
  props<{ projects: ProjectModel[] }>()
);

export const loadProjectsFailure = createAction(
  ProjectsActionsTypes.LoadProjectsFailure,
  props<{ error: string }>()
);
