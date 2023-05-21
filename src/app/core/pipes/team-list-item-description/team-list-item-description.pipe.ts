import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teamItemDescription' })
export class TeamListItemDescriptionPipe implements PipeTransform {
  transform(projectCounter: number, memberCounter: number): string {
    const projectText = projectCounter === 1 ? 'Project' : 'Projects';
    const memberText = memberCounter === 1 ? 'Member' : 'Members';

    return `${projectCounter} ${projectText}, ${memberCounter} ${memberText}`;
  }
}
