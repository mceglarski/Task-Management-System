import {EmployeeModel} from "./employee.model";
import {ProjectModel} from "./project.model";

export interface TeamModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly members: EmployeeModel[];
  readonly projects: ProjectModel[];
}
