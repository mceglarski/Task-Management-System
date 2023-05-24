import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list.component';
import { CommonModule } from '@angular/common';
import { CardItemProgressComponentModule } from '../../../core/components/card-item-progress/card-item-progress.component-module';
import { ProjectListItemDescriptionModule } from '../../../core/pipes/project-list-item-description/project-list-item-description.module';

@NgModule({
  imports: [
    CommonModule,
    CardItemProgressComponentModule,
    ProjectListItemDescriptionModule,
  ],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent],
})
export class ProjectsListComponentModule {}
