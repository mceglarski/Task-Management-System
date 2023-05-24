import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ProjectListItemModel } from '../../models/project-list-item.model';

@Component({
  selector: 'app-projects-list',
  styleUrls: ['./projects-list.component.scss'],
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  @Input()
  projectListItems: ProjectListItemModel[] | null;
}
