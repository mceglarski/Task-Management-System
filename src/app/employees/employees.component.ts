import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadEmployees } from '../state/store/employees/store/employees.actions';
import { EmployeeListItemMapper } from './mappers/employee-list-item.mapper';
import { selectAllEmployees } from '../state/store/employees/store/employees.selectors';
import { EmployeeListItemModel } from './models/employee-list-item.model';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Employees');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('You can browse through employees below');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();

  public readonly allEmployees$: Observable<EmployeeListItemModel[]> =
    this._store
      .select(selectAllEmployees)
      .pipe(map(EmployeeListItemMapper.employeeToListItemMapper));

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadEmployees());
  }
}
