import { createAction, props } from '@ngrx/store';
import { ChecklistModel } from '../../../models/checklist.model';

export enum CheckListActionsTypes {
  LoadCheckListRequest = '[CheckList] Load CheckList Request',
  LoadCheckListSuccess = '[CheckList] Load CheckList Success',
  LoadCheckListFailure = '[CheckList] Load CheckList Failure',
}

export const loadCheckList = createAction(
  CheckListActionsTypes.LoadCheckListRequest
);

export const loadCheckListSuccess = createAction(
  CheckListActionsTypes.LoadCheckListSuccess,
  props<{ checkList: ChecklistModel[] }>()
);

export const loadCheckListFailure = createAction(
  CheckListActionsTypes.LoadCheckListFailure,
  props<{ error: string }>()
);
