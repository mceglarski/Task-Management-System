import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-avatar-header',
  styleUrls: ['./avatar-header.component.scss'],
  templateUrl: './avatar-header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarHeaderComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  imageUrl: string;
}
