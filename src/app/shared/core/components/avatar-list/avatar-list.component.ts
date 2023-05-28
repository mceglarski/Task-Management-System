import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeItemModel } from '../../../employees/models/employee-item.model';

@Component({
  selector: 'app-avatar-list',
  styleUrls: ['./avatar-list.component.scss'],
  templateUrl: './avatar-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarListComponent {
  @Input()
  public members: EmployeeItemModel[];
}
