import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CheckListModel } from '../../../models/check-list.model';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor(private readonly _http: HttpClient) {}

  public getCheckList(): Observable<CheckListModel[]> {
    return this._http.get<CheckListModel[]>(
      `${environment.apiCheckListUrl}/checklist-items`
    );
  }
}
