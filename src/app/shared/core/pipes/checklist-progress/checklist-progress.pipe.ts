import { Pipe, PipeTransform } from '@angular/core';
import { ChecklistItemModel } from '../../../tasks/models/checklist-item.model';

@Pipe({ name: 'checkListProgress' })
export class CheckListProgressPipe implements PipeTransform {
  transform(checkList: ChecklistItemModel[] | null): string {
    return `${checkList?.filter((element) => element?.isDone).length} /
      ${checkList?.length}`;
  }
}
