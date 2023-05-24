import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { EmployeeModel } from '../../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private readonly _http: HttpClient) {}

  public getEmployees(): Observable<EmployeeModel[]> {
    return this._http.get<EmployeeModel[]>(
      `${environment.apiEmployeeUrl}/employees`
    );
  }
}
