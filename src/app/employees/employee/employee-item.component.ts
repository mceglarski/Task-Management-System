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
import {
  selectProjectsByAssigneeId,
  selectProjectsStatus,
} from '../../state/store/projects/store/projects.selectors';
import { loadProjects } from '../../state/store/projects/store/projects.actions';
import { TeamMembersItemModel } from '../../shared/teams/models/team-members-item.model';
import {
  selectAllTasks,
  selectTasksStatus,
} from '../../state/store/tasks/store/tasks.selectors';
import { loadTasks } from '../../state/store/tasks/store/tasks.actions';
import {
  selectAllChecklistItems,
  selectChecklistStatus,
} from '../../state/store/checklist/store/checklist.selectors';
import { loadChecklist } from '../../state/store/checklist/store/checklist.actions';
import { ProjectChecklistItemModel } from '../../shared/projects/models/project-checklist-item.model';
import { ProjectModel } from '../../state/models/project.model';
import { TaskModel } from '../../state/models/task.model';
import { CheckListModel } from '../../state/models/check-list.model';
import { ProjectChecklistItemMapper } from '../../shared/projects/mappers/project-checklist-item.mapper';
import { TeamMemberItemMapper } from '../../shared/teams/mappers/team-member-item.mapper';

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
        .pipe(map(TeamMemberItemMapper.teamsModelToMemberItemsMapper))
    )
  );

  public readonly projects$: Observable<ProjectChecklistItemModel[]> =
    combineLatest([
      this._empId$,
      this._store.select(selectAllTasks),
      this._store.select(selectAllChecklistItems),
    ]).pipe(
      switchMap(
        ([empId, tasks, checklists]: [string, TaskModel[], CheckListModel[]]) =>
          this._store
            .select(selectProjectsByAssigneeId(empId))
            .pipe(
              map((projects: ProjectModel[]) =>
                ProjectChecklistItemMapper.projectsTasksChecklistsToProjectChecklistItemMapper(
                  projects,
                  tasks,
                  checklists
                )
              )
            )
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

    this._store
      .select(selectTasksStatus)
      .pipe(
        take(1),
        tap((projectStatus: StatusTypes) => {
          if (projectStatus !== StatusTypes.Success) {
            this._store.dispatch(loadTasks());
          }
        })
      )
      .subscribe();

    this._store
      .select(selectChecklistStatus)
      .pipe(
        take(1),
        tap((projectStatus: StatusTypes) => {
          if (projectStatus !== StatusTypes.Success) {
            this._store.dispatch(loadChecklist());
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
