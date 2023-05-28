import { NgModule } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';
import { CommonModule } from '@angular/common';
import { DueTimeModule } from '../../../shared/core/pipes/due-time/due-time.module';
import { CardLongItemComponentModule } from '../../../shared/core/components/card-long-item/card-long-item-component.module';
@NgModule({
  imports: [CommonModule, DueTimeModule, CardLongItemComponentModule],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
