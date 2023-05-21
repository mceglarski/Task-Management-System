import { TeamsState } from './teams.store';
import { StatusTypes } from '../../../common/status.types';
import { createReducer, on } from '@ngrx/store';
import { loadTeams, loadTeamsFailure, loadTeamsSuccess } from './teams.actions';

export const initialState: TeamsState = {
  teams: [],
  error: null,
  status: StatusTypes.Pending,
};

export const teamsReducer = createReducer(
  initialState,
  on(loadTeams, (state) => ({ ...state, status: StatusTypes.Loading })),
  on(loadTeamsSuccess, (state, { teams }) => ({
    ...state,
    teams: teams,
    status: StatusTypes.Success,
    error: null,
  })),
  on(loadTeamsFailure, (state, { error }) => ({
    ...state,
    status: StatusTypes.Error,
    error: error,
  }))
);
