import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeItemModel } from '../../models/employee-item.model';

@Component({
  selector: 'app-employees-list',
  styleUrls: ['./employees-list.component.scss'],
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  @Input()
  employeeListItems: EmployeeItemModel[] | null;
}
