import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  styleUrls: ['./tasks-list.component.scss'],
  templateUrl: './tasks-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
}
