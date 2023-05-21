import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { TeamsService } from '../services/teams.service';
import { loadTeams, loadTeamsFailure, loadTeamsSuccess } from './teams.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class TeamsEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _teamsService: TeamsService
  ) {}

  loadTeams$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadTeams),
      switchMap(() =>
        from(this._teamsService.getTeams()).pipe(
          map((teams) => loadTeamsSuccess({ teams: teams })),
          catchError((error) => of(loadTeamsFailure({ error })))
        )
      )
    )
  );
}
