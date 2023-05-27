import { EmployeeItemModel } from '../../employees/models/employee-item.model';

export interface TeamMembersItemModel {
  readonly id: string;
  readonly name: string;
  readonly members: EmployeeItemModel[];
  readonly membersNumber: number;
  readonly projectsNumber: number;
}
