import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.store';
import { ProjectModel } from '../../../models/project.model';
import { EmployeeModel } from '../../../models/employee.model';

export const selectProjects = (state: AppState) => state.projects;
export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectsState) => state.projects
);

export const selectProjectsStatus = createSelector(
  selectProjects,
  (state: ProjectsState) => state.status
);

export const selectProjectsByAssigneeId = (id: string) =>
  createSelector(selectProjects, (state: ProjectsState) =>
    state.projects.filter((project: ProjectModel) =>
      project.assignees.some((assignee: EmployeeModel) => assignee.id === id)
    )
  );
