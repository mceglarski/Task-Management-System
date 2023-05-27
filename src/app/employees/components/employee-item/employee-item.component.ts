import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { loadEmployees } from '../../../state/store/employees/store/employees.actions';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { EmployeeItemModel } from '../../../shared/employees/models/employee-item.model';
import {
  selectEmployeeById,
  selectEmployeesStatus,
} from '../../../state/store/employees/store/employees.selectors';
import { EmployeeListItemMapper } from '../../../shared/employees/mappers/employee-list-item.mapper';
import { StatusTypes } from '../../../state/common/status.types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-item',
  styleUrls: ['./employee-item.component.scss'],
  templateUrl: './employee-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeItemComponent {
  private readonly _empIdSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private readonly _empId$: Observable<string> =
    this._empIdSubject.asObservable();

  public readonly employee$: Observable<EmployeeItemModel> = combineLatest([
    this._empId$,
  ]).pipe(
    switchMap(([empId]) =>
      this._store
        .select(selectEmployeeById(empId))
        .pipe(map(EmployeeListItemMapper.employeeToListItemMapper))
    )
  );

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _route: ActivatedRoute
  ) {
    this._route.params
      .pipe(
        take(1),
        tap((params) => this._empIdSubject.next(params['id']))
      )
      .subscribe();
    this._store
      .select(selectEmployeesStatus)
      .pipe(
        take(1),
        tap((empStatus: StatusTypes) => {
          if (empStatus !== StatusTypes.Success) {
            this._store.dispatch(loadEmployees());
          }
        })
      )
      .subscribe();
  }
}
