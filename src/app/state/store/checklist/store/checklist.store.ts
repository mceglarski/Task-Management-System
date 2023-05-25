import { StatusTypes } from '../../../common/status.types';
import { CheckListModel } from '../../../models/check-list.model';

export interface ChecklistState {
  readonly checkList: CheckListModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
