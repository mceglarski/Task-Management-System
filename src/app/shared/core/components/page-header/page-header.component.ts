import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-page-header',
  styleUrls: ['./page-header.component.scss'],
  templateUrl: './page-header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input()
  headerTitle: string | null;
  @Input()
  headerSubtitle: string | null;
}
