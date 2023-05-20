import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing';
import { TeamsComponent } from './teams.component';
import { TeamsListComponentModule } from './components/teams-list/teams-list.component-module';

@NgModule({
  imports: [CommonModule, TeamsRoutingModule, TeamsListComponentModule],
  declarations: [TeamsComponent],
})
export class TeamsModule {}
