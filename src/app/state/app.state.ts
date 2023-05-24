import { TeamsState } from './store/teams/store/teams.store';
import { ActionReducerMap } from '@ngrx/store';
import { teamsReducers } from './store/teams/store/teams.reducers';
import { ProjectsState } from './store/projects/store/projects.store';
import { projectsReducers } from './store/projects/store/projects.reducers';
import { ChecklistState } from './store/checklist/store/checklist.store';
import { tasksReducers } from './store/tasks/store/tasks.reducers';
import { checkListReducers } from './store/checklist/store/checklist.reducers';
import { TasksState } from './store/tasks/store/tasks.store';
import { EmployeesState } from './store/employees/store/employees.store';
import { employeesReducers } from './store/employees/store/employees.reducers';

export interface AppState {
  readonly teams: TeamsState;
  readonly projects: ProjectsState;
  readonly tasks: TasksState;
  readonly checkList: ChecklistState;
  readonly employees: EmployeesState;
}

export const reducers: ActionReducerMap<AppState> = {
  teams: teamsReducers,
  projects: projectsReducers,
  tasks: tasksReducers,
  checkList: checkListReducers,
  employees: employeesReducers,
};
