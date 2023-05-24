import { StatusTypes } from '../../../common/status.types';
import { ChecklistModel } from '../../../models/checklist.model';

export interface ChecklistState {
  readonly checkList: ChecklistModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
