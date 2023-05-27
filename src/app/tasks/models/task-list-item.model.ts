import { CheckListItemModel } from './checkList-item.model';
import { EmployeeTaskListItemModel } from './employee-task-list-item.model';

export interface TaskListItemModel {
  readonly name: string;
  readonly dueDate: Date;
  readonly employees: (EmployeeTaskListItemModel | undefined)[];
  readonly checkList: (CheckListItemModel | undefined)[];
}
