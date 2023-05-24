import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { ChecklistService } from '../services/checklist.service';
import { loadCheckList, loadCheckListSuccess } from './checklist.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { loadTeamsFailure } from '../../teams/store/teams.actions';

@Injectable()
export class ChecklistEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _checkListService: ChecklistService
  ) {}

  loadCheckList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadCheckList),
      switchMap(() =>
        from(this._checkListService.getCheckList()).pipe(
          map((checkList) => loadCheckListSuccess({ checkList: checkList })),
          catchError((error) => of(loadTeamsFailure({ error })))
        )
      )
    )
  );
}
