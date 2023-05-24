import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { TasksService } from '../services/tasks.service';
import { loadTasks, loadTasksFailure, loadTasksSuccess } from './tasks.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class TasksEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _tasksService: TasksService
  ) {}

  loadTasks$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        from(this._tasksService.getTasks()).pipe(
          map((tasks) => loadTasksSuccess({ tasks: tasks })),
          catchError((error) => of(loadTasksFailure({ error })))
        )
      )
    )
  );
}
