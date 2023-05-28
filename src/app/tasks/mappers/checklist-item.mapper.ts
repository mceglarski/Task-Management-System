import { CheckListModel } from '../../state/models/check-list.model';
import { ChecklistItemModel } from '../../shared/tasks/models/checklist-item.model';

export namespace ChecklistItemMapper {
  export function checkListElementToListItemMapper(
    checkList: CheckListModel | undefined
  ): ChecklistItemModel {
    return {
      id: checkList?.id,
      isDone: checkList?.isDone,
    };
  }
}
