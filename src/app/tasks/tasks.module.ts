import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing';
import { TasksListComponentModule } from './components/tasks-list/tasks-list.component-module';
import { PageHeaderComponentModule } from '../core/components/page-header/page-header.component-module';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    TasksListComponentModule,
    PageHeaderComponentModule,
  ],
  declarations: [TasksComponent],
})
export class TasksModule {}
