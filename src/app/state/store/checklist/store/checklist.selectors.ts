import { AppState } from '../../../app.state';
import { createSelector } from '@ngrx/store';
import { ChecklistState } from './checklist.store';
import { CheckListModel } from '../../../models/check-list.model';

export const selectChecklist = (state: AppState) => state.checkList;
export const selectAllChecklistItems = createSelector(
  selectChecklist,
  (state: ChecklistState) => state.checkList
);

export const selectChecklistStatus = createSelector(
  selectChecklist,
  (state: ChecklistState) => state.status
);

export const selectChecklistId = (id: string) =>
  createSelector(selectChecklist, (state: ChecklistState) =>
    state.checkList.find((element: CheckListModel) => element.id === id)
  );
