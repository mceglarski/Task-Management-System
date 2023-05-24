import { ProjectModel } from '../../state/models/project.model';
import { ProjectListItemModel } from '../models/project-list-item.model';

export namespace ProjectListItemMapper {
  export function projectModelToListItemMapper(
    projects: ProjectModel[]
  ): ProjectListItemModel[] {
    return projects.map((project: ProjectModel) => ({
      name: project.name,
      dueDate: project.dueDate,
      percentage: project.percentage,
    }));
  }
}
