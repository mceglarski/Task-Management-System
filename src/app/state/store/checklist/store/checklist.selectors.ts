import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { ChecklistState } from './checklist.store';

export const selectCheckList = (state: AppState) => state.checkList;
export const selectAllCheckListItems = createSelector(
  selectCheckList,
  (state: ChecklistState) => state.checkList
);
