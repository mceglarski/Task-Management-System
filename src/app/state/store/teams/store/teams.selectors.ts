import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { TeamsState } from './teams.store';

export const selectTeams = (state: AppState) => state.teams;
export const selectAllTeams = createSelector(
  selectTeams,
  (state: TeamsState) => state.teams
);
