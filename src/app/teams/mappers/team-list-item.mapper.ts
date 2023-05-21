import { TeamModel } from '../../state/models/team.model';
import { TeamListItemModel } from '../models/team-list-item.model';

export namespace TeamListItemMapper {
  export function teamModelToListItemMapper(
    teams: TeamModel[]
  ): TeamListItemModel[] {
    return teams.map((team: TeamModel) => ({
      name: team.name,
      membersCounter: team.members.length,
      projectsCounter: team.projects.length,
    }));
  }
}
