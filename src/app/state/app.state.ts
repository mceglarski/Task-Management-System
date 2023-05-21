import { TeamsState } from './store/teams/store/teams.store';

export interface AppState {
  readonly teams: TeamsState;
}
