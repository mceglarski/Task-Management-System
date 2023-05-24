import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing';

@NgModule({
  imports: [CommonModule, TasksRoutingModule],
  declarations: [TasksComponent],
})
export class TasksModule {}
