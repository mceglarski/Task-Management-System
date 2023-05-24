import { Pipe, PipeTransform } from '@angular/core';
import { ProjectListItemModel } from '../../../projects/models/project-list-item.model';
import { formatDate } from '@angular/common';

@Pipe({ name: 'projectItemDescription' })
export class ProjectListItemDescriptionPipe implements PipeTransform {
  transform(project: ProjectListItemModel): string {
    return `Due on ${formatDate(project.dueDate, 'MMM d, y', 'en-US')}`;
  }
}
