import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-avatar-simple-item',
  styleUrls: ['./avatar-simple-item.component.scss'],
  templateUrl: './avatar-simple-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarSimpleItemComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  imageUrl: string;
}
