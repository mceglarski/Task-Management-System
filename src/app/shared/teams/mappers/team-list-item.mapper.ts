import { TeamModel } from '../../../state/models/team.model';
import { TeamListItemModel } from '../models/team-list-item.model';

export namespace TeamListItemMapper {
  export function teamModelToListItemMapper(
    teams: TeamModel[]
  ): TeamListItemModel[] {
    return teams.map((team: TeamModel) => ({
      id: team.id,
      name: team.name,
      membersNumber: team.members.length,
      projectsNumber: team.projects.length,
    }));
  }
}
