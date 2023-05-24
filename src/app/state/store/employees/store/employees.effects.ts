import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { EmployeesService } from '../services/employees.service';
import {
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employees.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class EmployeesEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _employeesService: EmployeesService
  ) {}

  loadEmployees$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadEmployees),
      switchMap(() =>
        from(this._employeesService.getEmployees()).pipe(
          map((employees) => loadEmployeesSuccess({ employees: employees })),
          catchError((error) => of(loadEmployeesFailure({ error })))
        )
      )
    )
  );
}
