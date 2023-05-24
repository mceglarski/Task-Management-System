import { ProjectModel } from '../../../models/project.model';
import { StatusTypes } from '../../../common/status.types';

export interface ProjectsState {
  readonly projects: ProjectModel[];
  readonly error: string | null;
  readonly status: StatusTypes;
}
