import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'nav-top-bar',
  styleUrls: ['./nav-top-bar.component.scss'],
  templateUrl: './nav-top-bar.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTopBarComponent {}
