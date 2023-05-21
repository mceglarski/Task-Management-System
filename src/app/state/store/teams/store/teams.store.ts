import { TeamModel } from '../../../models/team.model';
import { StatusTypes } from '../../../common/status.types';

export interface TeamsState {
  readonly teams: TeamModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
