import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { TeamsState } from './teams.store';
import { TeamModel } from '../../../models/team.model';
import { EmployeeModel } from '../../../models/employee.model';

export const selectTeams = (state: AppState) => state.teams;
export const selectAllTeams = createSelector(
  selectTeams,
  (state: TeamsState) => state.teams
);

export const selectTeamsStatus = createSelector(
  selectTeams,
  (state: TeamsState) => state.status
);

export const selectTeamById = (id: string) =>
  createSelector(selectTeams, (state: TeamsState) =>
    state.teams.find((team: TeamModel) => team.id === id)
  );

export const selectTeamsByMemberId = (id: string) =>
  createSelector(selectTeams, (state: TeamsState) =>
    state.teams.filter((team: TeamModel) =>
      team.members.some((member: EmployeeModel) => member.id === id)
    )
  );
