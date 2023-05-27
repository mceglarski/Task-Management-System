import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  private readonly _pageTitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Employees');
  public readonly pageTitle$: Observable<string> =
    this._pageTitleSubject.asObservable();

  private readonly _pageSubtitleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('You can browse through employees below');
  public readonly pageSubtitle$: Observable<string> =
    this._pageSubtitleSubject.asObservable();
}
