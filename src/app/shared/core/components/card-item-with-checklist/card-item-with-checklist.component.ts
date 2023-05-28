import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-item-with-checklist',
  styleUrls: ['./card-item-with-checklist.component.scss'],
  templateUrl: './card-item-with-checklist.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemWithChecklistComponent {
  @Input()
  public percentage: number;
  @Input()
  public cardTitle: string;
  @Input()
  public cardSubtitle: string;
  @Input()
  public checklistProgress: string;
}
