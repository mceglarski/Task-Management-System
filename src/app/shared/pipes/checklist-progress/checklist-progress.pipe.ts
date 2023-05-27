import { Pipe, PipeTransform } from '@angular/core';
import { CheckListItemModel } from '../../../tasks/models/checkList-item.model';

@Pipe({ name: 'checkListProgress' })
export class CheckListProgressPipe implements PipeTransform {
  transform(checkList: (CheckListItemModel | undefined)[] | null): string {
    return `${checkList?.filter((element) => element?.isDone).length} /
      ${checkList?.length}`;
  }
}
