import { StatusTypes } from '../../../common/status.types';
import { TaskModel } from '../../../models/task.model';

export interface TasksState {
  readonly tasks: TaskModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
