import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { TaskModel } from '../../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private readonly _http: HttpClient) {}

  public getTasks(): Observable<TaskModel[]> {
    return this._http.get<TaskModel[]>(`${environment.apiTaskUrl}/tasks`);
  }
}
