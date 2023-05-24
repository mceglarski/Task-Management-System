import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.store';

export const selectProjects = (state: AppState) => state.projects;
export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectsState) => state.projects
);
