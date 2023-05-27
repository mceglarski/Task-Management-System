import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeItemModel } from '../../../employees/models/employee-item.model';

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
  @Input()
  public members: EmployeeItemModel[];
}
