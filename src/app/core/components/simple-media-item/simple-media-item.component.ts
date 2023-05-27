import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-simple-media-item',
  styleUrls: ['./simple-media-item.component.scss'],
  templateUrl: './simple-media-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleMediaItemComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  imageUrl: string;
}
