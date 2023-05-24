import { createAction, props } from '@ngrx/store';
import { ProjectModel } from '../../../models/project.model';

export enum ProjectsActionsTypes {
  LoadProjectRequest = '[Project Page] Load Project Request',
  LoadProjectSuccess = '[Project Page] Load Project Success',
  LoadProjectFailure = '[Project Page] Load Project Failure',
}

export const loadProjects = createAction(
  ProjectsActionsTypes.LoadProjectRequest
);

export const loadProjectsSuccess = createAction(
  ProjectsActionsTypes.LoadProjectSuccess,
  props<{ projects: ProjectModel[] }>()
);

export const loadProjectsFailure = createAction(
  ProjectsActionsTypes.LoadProjectFailure,
  props<{ error: string }>()
);
