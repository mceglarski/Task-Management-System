import { TaskModel } from '../../state/models/task.model';
import { CheckListModel } from '../../state/models/check-list.model';
import { EmployeeModel } from '../../state/models/employee.model';
import { TaskListItemModel } from '../models/task-list-item.model';
import { ChecklistItemMapper } from './checklist-item.mapper';
import { EmployeeListItemMapper } from './employee-list-item.mapper';

export namespace TaskListItemMapper {
  export function taskElementsToTaskListItemMapper(
    tasks: TaskModel[],
    checkList: CheckListModel[],
    employees: EmployeeModel[]
  ): TaskListItemModel[] {
    return tasks.map((task: TaskModel) => ({
      name: task.name,
      dueDate: task.dueDate,
      employees: task.assigneeIds.map((employeeId: string) =>
        EmployeeListItemMapper.employeeElementToListItemMapper(
          employees.find((empItem) => empItem?.id === employeeId)
        )
      ),
      checkList: task.checkList.map((checkListId) =>
        ChecklistItemMapper.checkListElementToListItemMapper(
          checkList.find((checkListItem) => checkListItem?.id === checkListId)
        )
      ),
    }));
  }
}
