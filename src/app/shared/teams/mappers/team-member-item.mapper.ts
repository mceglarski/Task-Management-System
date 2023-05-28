import { TeamModel } from '../../../state/models/team.model';
import { TeamMembersItemModel } from '../models/team-members-item.model';
import { ProjectListItemMapper } from '../../projects/mappers/project-list-item.mapper';

export namespace TeamMemberItemMapper {
  export function teamsModelToMemberItemsMapper(
    teams: TeamModel[]
  ): TeamMembersItemModel[] {
    return teams.map((team: TeamModel) => ({
      id: team.id,
      name: team.name,
      description: team.description,
      projects: ProjectListItemMapper.projectModelToListItemMapper(
        team.projects
      ),
      members: team.members,
      membersNumber: team.members.length,
      projectsNumber: team.projects.length,
    }));
  }

  export function teamModelToMemberItemMapper(
    team: TeamModel | undefined
  ): TeamMembersItemModel {
    return {
      id: team?.id || '',
      name: team?.name || '',
      description: team?.description || '',
      projects: ProjectListItemMapper.projectModelToListItemMapper(
        team?.projects
      ),
      members: team?.members || [],
      membersNumber: team?.members.length || 0,
      projectsNumber: team?.projects.length || 0,
    };
  }
}
