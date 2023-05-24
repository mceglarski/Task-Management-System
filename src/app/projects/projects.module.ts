import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing';
import { ProjectsListComponentModule } from './components/projects-list/projects-list.component-module';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, ProjectsListComponentModule],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
