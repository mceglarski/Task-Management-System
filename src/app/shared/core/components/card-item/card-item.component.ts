import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-item',
  styleUrls: ['./card-item.component.scss'],
  templateUrl: './card-item.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input()
  public cardTitle: string;
  @Input()
  public cardSubtitle: string;
}
