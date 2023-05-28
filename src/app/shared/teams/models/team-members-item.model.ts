import { EmployeeItemModel } from '../../employees/models/employee-item.model';
import { ProjectListItemModel } from '../../projects/models/project-list-item.model';

export interface TeamMembersItemModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly members: EmployeeItemModel[];
  readonly projects: ProjectListItemModel[];
  readonly membersNumber: number;
  readonly projectsNumber: number;
}
