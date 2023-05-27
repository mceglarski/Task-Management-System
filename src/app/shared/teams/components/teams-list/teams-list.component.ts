import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TeamListItemModel } from '../../models/team-list-item.model';

@Component({
  selector: 'app-teams-list',
  styleUrls: ['./teams-list.component.scss'],
  templateUrl: './teams-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListComponent {
  @Input()
  teamListItems: TeamListItemModel[] | null;
}
