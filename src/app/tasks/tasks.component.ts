import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadTasks } from '../state/store/tasks/store/tasks.actions';
import { loadChecklist } from '../state/store/checklist/store/checklist.actions';
import { loadEmployees } from '../state/store/employees/store/employees.actions';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { TaskListItemModel } from './models/task-list-item.model';
import { selectAllTasks } from '../state/store/tasks/store/tasks.selectors';
import { selectAllChecklistItems } from '../state/store/checklist/store/checklist.selectors';
import { selectAllEmployees } from '../state/store/employees/store/employees.selectors';
import { TaskListItemMapper } from './mappers/task-list-item.mapper';

@Component({
  selector: 'app-tasks',
  styleUrls: ['./tasks.component.scss'],
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Tasks');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('You can browse through tasks below');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();

  public readonly taskList$: Observable<TaskListItemModel[]> = combineLatest([
    this._store.select(selectAllTasks),
    this._store.select(selectAllChecklistItems),
    this._store.select(selectAllEmployees),
  ]).pipe(
    map(([tasks, checkList, employees]) =>
      TaskListItemMapper.taskElementsToTaskListItemMapper(
        tasks,
        checkList,
        employees
      )
    )
  );

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadTasks());
    this._store.dispatch(loadChecklist());
    this._store.dispatch(loadEmployees());
  }
}
