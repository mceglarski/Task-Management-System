import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamModel } from '../../../models/team.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private readonly _http: HttpClient) {}

  public getTeams(): Observable<TeamModel[]> {
    return this._http.get<TeamModel[]>(`${environment.apiTeamUrl}/teams`);
  }
}
