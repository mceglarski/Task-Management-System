import {EmployeeModel} from "./employee.model";

export interface ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: Date;
  readonly dueDate: Date;
  readonly visibility: string;
  readonly percentage: number;
  readonly assignees: EmployeeModel[];
}
