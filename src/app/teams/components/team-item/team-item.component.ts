import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import {
  selectTeamById,
  selectTeamsStatus,
} from '../../../state/store/teams/store/teams.selectors';
import { StatusTypes } from '../../../state/common/status.types';
import { loadTeams } from '../../../state/store/teams/store/teams.actions';
import { TeamMemberItemMapper } from '../../../shared/teams/mappers/team-member-item.mapper';
import { TeamMembersItemModel } from '../../../shared/teams/models/team-members-item.model';

@Component({
  selector: 'app-team-item',
  styleUrls: ['./team-item.component.scss'],
  templateUrl: './team-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamItemComponent implements OnDestroy {
  private readonly _teamIdSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private readonly _teamId$: Observable<string> =
    this._teamIdSubject.asObservable();

  public readonly team$: Observable<TeamMembersItemModel> = combineLatest([
    this._teamId$,
  ]).pipe(
    switchMap(([teamId]) =>
      this._store
        .select(selectTeamById(teamId))
        .pipe(map(TeamMemberItemMapper.teamModelToMemberItemMapper))
    )
  );

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _route: ActivatedRoute
  ) {
    this._route.params
      .pipe(
        takeUntil(this._unsubscribe$),
        tap((params) => this._teamIdSubject.next(params['id']))
      )
      .subscribe();

    this._store
      .select(selectTeamsStatus)
      .pipe(
        take(1),
        tap((teamStatus: StatusTypes) => {
          if (teamStatus !== StatusTypes.Success) {
            this._store.dispatch(loadTeams());
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
