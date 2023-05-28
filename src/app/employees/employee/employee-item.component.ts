import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { loadEmployees } from '../../state/store/employees/store/employees.actions';
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
import { EmployeeItemModel } from '../../shared/employees/models/employee-item.model';
import {
  selectEmployeeById,
  selectEmployeesStatus,
} from '../../state/store/employees/store/employees.selectors';
import { EmployeeListItemMapper } from '../../shared/employees/mappers/employee-list-item.mapper';
import { StatusTypes } from '../../state/common/status.types';
import { ActivatedRoute } from '@angular/router';
import {
  selectTeamsByMemberId,
  selectTeamsStatus,
} from '../../state/store/teams/store/teams.selectors';
import { loadTeams } from '../../state/store/teams/store/teams.actions';
import { selectProjectsStatus } from '../../state/store/projects/store/projects.selectors';
import { loadProjects } from '../../state/store/projects/store/projects.actions';
import { TeamListItemMapper } from '../../shared/teams/mappers/team-list-item.mapper';
import { TeamMembersItemModel } from '../../shared/teams/models/team-members-item.model';
import { ProjectListItemModel } from '../../projects/models/project-list-item.model';

@Component({
  selector: 'app-employee-item',
  styleUrls: ['./employee-item.component.scss'],
  templateUrl: './employee-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeItemComponent implements OnDestroy {
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

  public readonly teams$: Observable<TeamMembersItemModel[]> = combineLatest([
    this._empId$,
  ]).pipe(
    switchMap(([empId]) =>
      this._store
        .select(selectTeamsByMemberId(empId))
        .pipe(map(TeamListItemMapper.teamsModelToMemberItemMapper))
    )
  );

  // public readonly projects$: Observable<ProjectListItemModel[]> = combineLatest(
  //   [this._empId$]
  // ).pipe(
  //   switchMap(([empId]) =>
  //     this._store
  //       .select(selectTeamsByMemberId(empId))
  //       .pipe(map(TeamListItemMapper.teamsModelToMemberItemMapper))
  //   )
  // );

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _route: ActivatedRoute
  ) {
    this._route.params
      .pipe(
        takeUntil(this._unsubscribe$),
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

    this._store
      .select(selectProjectsStatus)
      .pipe(
        take(1),
        tap((projectStatus: StatusTypes) => {
          if (projectStatus !== StatusTypes.Success) {
            this._store.dispatch(loadProjects());
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
