import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TaskListItemModel } from '../../models/task-list-item.model';

@Component({
  selector: 'app-tasks-list',
  styleUrls: ['./tasks-list.component.scss'],
  templateUrl: './tasks-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  @Input()
  taskListItems: TaskListItemModel[];
}
