import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing';
import { TeamsComponent } from './teams.component';
import { TeamsListComponentModule } from '../shared/teams/components/teams-list/teams-list.component-module';
import { PageHeaderComponentModule } from '../shared/core/components/page-header/page-header.component-module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamsListComponentModule,
    PageHeaderComponentModule,
  ],
  declarations: [TeamsComponent],
})
export class TeamsModule {}
