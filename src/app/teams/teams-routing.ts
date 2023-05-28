import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamItemComponent } from './components/team-item/team-item.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
  },
  {
    path: ':id',
    component: TeamItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
