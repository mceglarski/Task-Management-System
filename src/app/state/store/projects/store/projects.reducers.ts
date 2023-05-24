import { ProjectsState } from './projects.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import {
  loadProjects,
  loadProjectsFailure,
  loadProjectsSuccess,
} from './projects.actions';

export const initialState: ProjectsState = {
  projects: [],
  error: null,
  status: StatusTypes.Pending,
};

export const projectsReducers = createReducer(
  initialState,
  on(loadProjects, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadProjectsFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
