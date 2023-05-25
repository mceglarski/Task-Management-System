import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing';
import { TasksListComponentModule } from './components/tasks-list/tasks-list.component-module';

@NgModule({
  imports: [CommonModule, TasksRoutingModule, TasksListComponentModule],
  declarations: [TasksComponent],
})
export class TasksModule {}
