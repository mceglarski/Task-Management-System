import { TeamsState } from './store/teams/store/teams.store';
import { ActionReducerMap } from '@ngrx/store';
import { teamsReducers } from './store/teams/store/teams.reducers';
import { ProjectsState } from './store/projects/store/projects.store';
import { projectsReducers } from './store/projects/store/projects.reducers';

export interface AppState {
  readonly teams: TeamsState;
  readonly projects: ProjectsState;
}

export const reducers: ActionReducerMap<AppState> = {
  teams: teamsReducers,
  projects: projectsReducers,
};
