import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {loadTeams} from "../state/store/teams/store/teams.actions";
import {loadEmployees} from "../state/store/employees/store/employees.actions";
import {TeamListItemModel} from "../shared/teams/models/team-list-item.model";
import {selectAllTeams} from "../state/store/teams/store/teams.selectors";
import {TeamListItemMapper} from "../shared/teams/mappers/team-list-item.mapper";
import {EmployeeItemModel} from "../shared/employees/models/employee-item.model";
import {selectAllEmployees} from "../state/store/employees/store/employees.selectors";
import {EmployeeListItemMapper} from "../shared/employees/mappers/employee-list-item.mapper";

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Welcome to our software!');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Select a team below to get started');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();

  public readonly allTeams$: Observable<TeamListItemModel[]> = this._store
    .select(selectAllTeams)
    .pipe(map(TeamListItemMapper.teamModelToListItemMapper));
  public readonly allEmployees$: Observable<EmployeeItemModel[]> =
    this._store
      .select(selectAllEmployees)
      .pipe(map(EmployeeListItemMapper.employeesToListItemMapper));

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadTeams());
    this._store.dispatch(loadEmployees());
  }
}
