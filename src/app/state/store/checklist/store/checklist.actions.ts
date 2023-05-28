import { createAction, props } from '@ngrx/store';
import { CheckListModel } from '../../../models/check-list.model';

export enum CheckListActionsTypes {
  LoadCheckListRequest = '[CheckList] Load CheckList Request',
  LoadCheckListSuccess = '[CheckList] Load CheckList Success',
  LoadCheckListFailure = '[CheckList] Load CheckList Failure',
}

export const loadChecklist = createAction(
  CheckListActionsTypes.LoadCheckListRequest
);

export const loadChecklistSuccess = createAction(
  CheckListActionsTypes.LoadCheckListSuccess,
  props<{ checkList: CheckListModel[] }>()
);

export const loadChecklistFailure = createAction(
  CheckListActionsTypes.LoadCheckListFailure,
  props<{ error: string }>()
);
