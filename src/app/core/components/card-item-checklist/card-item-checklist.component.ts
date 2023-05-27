import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeListItemModel } from '../../../tasks/models/employee-list-item.model';
import { CheckListItemModel } from '../../../tasks/models/checkList-item.model';

@Component({
  selector: 'app-card-item-checklist',
  styleUrls: ['./card-item-checklist.component.scss'],
  templateUrl: './card-item-checklist.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemChecklistComponent {
  @Input()
  public cardTitle: string;
  @Input()
  public cardSubtitle: string;
  @Input()
  public employee: (EmployeeListItemModel | undefined)[];
  @Input()
  public checkList: (CheckListItemModel | undefined)[];

  public calculateCheckListProgress(
    checkListElements: (CheckListItemModel | undefined)[]
  ): number {
    return (
      (checkListElements.filter((element) => element?.isDone).length /
        checkListElements.length) *
      100
    );
  }

  public getCheckListProgressClass(
    checkListElements: (CheckListItemModel | undefined)[]
  ): string {
    console.log(this.checkList)
    if (this.calculateCheckListProgress(checkListElements) === 100) {
      return 'bg-primary';
    }
    if (this.calculateCheckListProgress(checkListElements) >= 50) {
      return 'bg-warning';
    }
    return 'bg-danger';
  }
}
