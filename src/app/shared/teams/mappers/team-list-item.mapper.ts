import { TeamModel } from '../../../state/models/team.model';
import { TeamListItemModel } from '../models/team-list-item.model';
import { TeamMembersItemModel } from '../models/team-members-item.model';

export namespace TeamListItemMapper {
  export function teamsModelToListItemMapper(
    teams: TeamModel[]
  ): TeamListItemModel[] {
    return teams.map((team: TeamModel) => ({
      id: team.id,
      name: team.name,
      membersNumber: team.members.length,
      projectsNumber: team.projects.length,
    }));
  }

  export function teamsModelToMemberItemMapper(
    teams: TeamModel[]
  ): TeamMembersItemModel[] {
    return teams.map((team: TeamModel) => ({
      id: team.id,
      name: team.name,
      members: team.members,
      membersNumber: team.members.length,
      projectsNumber: team.projects.length,
    }));
  }
}
