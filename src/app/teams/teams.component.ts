import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTeams } from '../state/store/teams/store/teams.actions';
import { map, Observable } from 'rxjs';
import { selectAllTeams } from '../state/store/teams/store/teams.selectors';
import { AppState } from '../state/app.state';
import { TeamListItemMapper } from './mappers/team-list-item.mapper';
import { TeamListItemModel } from './models/team-list-item.model';

@Component({
  selector: 'app-teams',
  styleUrls: ['./teams.component.scss'],
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  public allTeams$: Observable<TeamListItemModel[]> = this._store
    .select(selectAllTeams)
    .pipe(map(TeamListItemMapper.teamModelToListItemMapper));

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadTeams());
  }
}
