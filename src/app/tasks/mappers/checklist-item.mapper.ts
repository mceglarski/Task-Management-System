import { CheckListModel } from '../../state/models/check-list.model';
import { CheckListItemModel } from '../models/checkList-item.model';

export namespace ChecklistItemMapper {
  export function checkListElementToListItemMapper(
    checkList: CheckListModel | undefined
  ): CheckListItemModel {
    return {
      id: checkList?.id,
      isDone: checkList?.isDone,
    };
  }
}
