import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ChecklistModel } from '../../../models/checklist.model';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor(private readonly _http: HttpClient) {}

  public getCheckList(): Observable<ChecklistModel[]> {
    return this._http.get<ChecklistModel[]>(
      `${environment.apiCheckListUrl}/checklist-items`
    );
  }
}
