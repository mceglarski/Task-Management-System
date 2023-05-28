import { ChecklistItemModel } from '../../tasks/models/checklist-item.model';

export interface ProjectChecklistItemModel {
  readonly name: string;
  readonly dueDate: Date;
  readonly checklist: ChecklistItemModel[];
}
