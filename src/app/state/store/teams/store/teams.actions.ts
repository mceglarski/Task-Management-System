import { createAction, props } from '@ngrx/store';
import { TeamModel } from '../../../models/team.model';

export enum TeamsActionsTypes {
  LoadTeamsRequest = '[Teams Page] Load Teams Request',
  LoadTeamsSuccess = '[Teams Page] Load Teams Success',
  LoadTeamsFailure = '[Teams Page] Load Teams Failure',
}

export const loadTeams = createAction(TeamsActionsTypes.LoadTeamsRequest);

export const loadTeamsSuccess = createAction(
  TeamsActionsTypes.LoadTeamsSuccess,
  props<{ teams: TeamModel[] }>()
);

export const loadTeamsFailure = createAction(
  TeamsActionsTypes.LoadTeamsFailure,
  props<{ error: string }>()
);
