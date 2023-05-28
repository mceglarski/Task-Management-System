import { NgModule } from '@angular/core';
import { ProjectsListComponent } from './projects-list.component';
import { CommonModule } from '@angular/common';
import { DueTimeModule } from '../../../shared/core/pipes/due-time/due-time.module';
import { CardItemWithChecklistComponentModule } from '../../../shared/core/components/card-item-with-checklist/card-item-with-checklist-component.module';

@NgModule({
  imports: [CommonModule, DueTimeModule, CardItemWithChecklistComponentModule],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent],
})
export class ProjectsListComponentModule {}
