import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeListItemModel } from '../../models/employee-list-item.model';

@Component({
  selector: 'app-employees-list',
  styleUrls: ['./employees-list.component.scss'],
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  @Input()
  employeeListItems: EmployeeListItemModel[] | null;
}
