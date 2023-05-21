import { Pipe, PipeTransform } from '@angular/core';
import {TeamListItemModel} from "../../../teams/models/team-list-item.model";

@Pipe({ name: 'teamItemDescription' })
export class TeamListItemDescriptionPipe implements PipeTransform {
  transform(team: TeamListItemModel): string {
    const projectText = team.projectsNumber === 1 ? 'Project' : 'Projects';
    const memberText = team.membersNumber === 1 ? 'Member' : 'Members';

    return `${team.projectsNumber} ${projectText}, ${team.membersNumber} ${memberText}`;
  }
}
