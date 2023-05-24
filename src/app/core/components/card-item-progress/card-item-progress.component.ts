import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-item-progress',
  styleUrls: ['./card-item-progress.component.scss'],
  templateUrl: './card-item-progress.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemProgressComponent {
  @Input()
  public percentage: number;
  @Input()
  public cardTitle: string;
  @Input()
  public cardSubtitle: string;
}
