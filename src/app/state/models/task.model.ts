export interface TaskModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: Date;
  readonly dueDate: Date;
  readonly assigneeIds: string[];
  readonly checkList: string[];
  readonly projectId: string;
}
