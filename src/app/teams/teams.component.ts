import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTeams } from '../state/store/teams/store/teams.actions';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { selectAllTeams } from '../state/store/teams/store/teams.selectors';
import { AppState } from '../state/app.state';
import { TeamListItemMapper } from '../shared/teams/mappers/team-list-item.mapper';
import { TeamListItemModel } from '../shared/teams/models/team-list-item.model';

@Component({
  selector: 'app-teams',
  styleUrls: ['./teams.component.scss'],
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Teams');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('You can browse through teams below');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();

  public readonly allTeams$: Observable<TeamListItemModel[]> = this._store
    .select(selectAllTeams)
    .pipe(map(TeamListItemMapper.teamModelToListItemMapper));

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadTeams());
  }
}
