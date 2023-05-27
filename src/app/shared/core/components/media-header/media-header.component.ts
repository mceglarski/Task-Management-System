import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-media-header',
  styleUrls: ['./media-header.component.scss'],
  templateUrl: './media-header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaHeaderComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  imageUrl: string;
}
