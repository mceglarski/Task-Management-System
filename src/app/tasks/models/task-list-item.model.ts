import { CheckListItemModel } from './checkList-item.model';
import { EmployeeListItemModel } from './employee-list-item.model';

export interface TaskListItemModel {
  readonly name: string;
  readonly dueDate: Date;
  readonly employees: (EmployeeListItemModel | undefined)[];
  readonly checkList: (CheckListItemModel | undefined)[];
}
