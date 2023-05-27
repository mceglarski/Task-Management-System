import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadProjects } from '../state/store/projects/store/projects.actions';
import { ProjectListItemModel } from './models/project-list-item.model';
import { selectAllProjects } from '../state/store/projects/store/projects.selectors';
import { ProjectListItemMapper } from './mappers/project-list-item.mapper';

@Component({
  selector: 'app-projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Projects');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('You can browse through projects below');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();

  public readonly allProjects$: Observable<ProjectListItemModel[]> = this._store
    .select(selectAllProjects)
    .pipe(map(ProjectListItemMapper.projectModelToListItemMapper));

  constructor(private readonly _store: Store<AppState>) {
    this._store.dispatch(loadProjects());
  }
}
