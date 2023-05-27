import { NgModule } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';
import { CommonModule } from '@angular/common';
import { CardItemChecklistComponentModule } from '../../../shared/core/components/card-item-checklist/card-item-checklist.component-module';
import { DueTimeModule } from '../../../shared/pipes/due-time/due-time.module';

@NgModule({
  imports: [CommonModule, CardItemChecklistComponentModule, DueTimeModule],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
