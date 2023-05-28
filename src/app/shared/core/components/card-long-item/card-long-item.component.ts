import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeTaskListItemModel } from '../../../../tasks/models/employee-task-list-item.model';
import { ChecklistItemModel } from '../../../tasks/models/checklist-item.model';

@Component({
  selector: 'app-card-long-item',
  styleUrls: ['./card-long-item.component.scss'],
  templateUrl: './card-long-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLongItemComponent {
  @Input()
  public cardTitle: string;
  @Input()
  public cardSubtitle: string;
  @Input()
  public employee: (EmployeeTaskListItemModel | undefined)[];
  @Input()
  public checkList: (ChecklistItemModel | undefined)[];

  public calculateCheckListProgress(
    checkListElements: (ChecklistItemModel | undefined)[]
  ): number {
    return (
      (checkListElements.filter((element) => element?.isDone).length /
        checkListElements.length) *
      100
    );
  }

  public getCheckListProgressClass(
    checkListElements: (ChecklistItemModel | undefined)[]
  ): string {
    if (this.calculateCheckListProgress(checkListElements) === 100) {
      return 'bg-primary';
    }
    if (this.calculateCheckListProgress(checkListElements) >= 50) {
      return 'bg-warning';
    }
    return 'bg-danger';
  }
}
