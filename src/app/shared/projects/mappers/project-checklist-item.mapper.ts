import { ProjectModel } from '../../../state/models/project.model';
import { ProjectChecklistItemModel } from '../models/project-checklist-item.model';
import { TaskModel } from '../../../state/models/task.model';
import { CheckListModel } from '../../../state/models/check-list.model';

export namespace ProjectChecklistItemMapper {
  export function projectsTasksChecklistsToProjectChecklistItemMapper(
    projects: ProjectModel[],
    tasks: TaskModel[],
    checklists: CheckListModel[]
  ): ProjectChecklistItemModel[] {
    const result: ProjectChecklistItemModel[] = [];

    for (const project of projects) {
      const projectWithChecklists: ProjectChecklistItemModel = {
        name: project.name,
        dueDate: project.dueDate,
        checklist: [],
      };

      for (const task of tasks) {
        if (task.projectId === project.id) {
          for (const checklistId of task.checkList) {
            const checklist = checklists.find((c) => c.id === checklistId);
            if (checklist) {
              projectWithChecklists.checklist.push(checklist);
            }
          }
        }
      }

      result.push(projectWithChecklists);
    }

    return result;
  }
}
