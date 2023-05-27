import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'nav-sidebar',
  styleUrls: ['./nav-sidebar.component.scss'],
  templateUrl: './nav-sidebar.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSidebarComponent {}
