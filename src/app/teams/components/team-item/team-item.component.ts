import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-team-item',
  styleUrls: ['./team-item.component.scss'],
  templateUrl: './team-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamItemComponent {}
