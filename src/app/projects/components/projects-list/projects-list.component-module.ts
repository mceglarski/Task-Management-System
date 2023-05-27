import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list.component';
import { CommonModule } from '@angular/common';
import { CardItemProgressComponentModule } from '../../../core/components/card-item-progress/card-item-progress.component-module';
import { DueTimeModule } from '../../../core/pipes/due-time/due-time.module';

@NgModule({
  imports: [
    CommonModule,
    CardItemProgressComponentModule,
    DueTimeModule,
  ],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent],
})
export class ProjectsListComponentModule {}