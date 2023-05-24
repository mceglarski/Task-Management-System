import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { ProjectsService } from '../services/projects.service';
import {
  loadProjects,
  loadProjectsFailure,
  loadProjectsSuccess,
} from './projects.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProjectsEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store<AppState>,
    private readonly _projectsService: ProjectsService
  ) {}

  loadProjects$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProjects),
      switchMap(() =>
        from(this._projectsService.getProjects()).pipe(
          map((projects) => loadProjectsSuccess({ projects: projects })),
          catchError((error) => of(loadProjectsFailure({ error })))
        )
      )
    )
  );
}
