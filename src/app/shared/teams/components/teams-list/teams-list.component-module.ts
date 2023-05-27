import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';
import { CommonModule } from '@angular/common';
import { CardItemComponentModule } from '../../../core/components/card-item/card-item.component-module';
import { TeamListItemDescriptionModule } from '../../../pipes/team-list-item-description/team-list-item-description.module';

@NgModule({
  imports: [
    CommonModule,
    CardItemComponentModule,
    TeamListItemDescriptionModule,
  ],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
