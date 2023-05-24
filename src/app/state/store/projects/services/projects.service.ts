import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ProjectModel } from '../../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private readonly _http: HttpClient) {}

  public getProjects(): Observable<ProjectModel[]> {
    return this._http.get<ProjectModel[]>(
      `${environment.apiProjectUrl}/projects`
    );
  }
}
