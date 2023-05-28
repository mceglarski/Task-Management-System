import { NgModule } from '@angular/core';
import { EmployeeItemComponent } from './employee-item.component';
import { EmployeeRoutingModule } from './employee-routing';
import { CommonModule } from '@angular/common';
import { AvatarSimpleItemComponentModule } from '../../shared/core/components/avatar-simple-item/avatar-simple-item-component.module';
import { EmployeeTitleModule } from '../../shared/core/pipes/employee-title/employee-title.module';
import { CardItemComponentModule } from '../../shared/core/components/card-item/card-item.component-module';
import { TeamListItemDescriptionModule } from '../../shared/core/pipes/team-list-item-description/team-list-item-description.module';
import { CardItemWithChecklistComponentModule } from '../../shared/core/components/card-item-with-checklist/card-item-with-checklist-component.module';
import { ChecklistProgressModule } from '../../shared/core/pipes/checklist-progress/checklist-progress.module';
import { DueTimeDaysModule } from '../../shared/core/pipes/due-time-days/due-time-days.module';
import { AvatarHeaderComponentModule } from '../../shared/core/components/avatar-header/avatar-header-component.module';

@NgModule({
  imports: [
    EmployeeRoutingModule,
    CommonModule,
    AvatarSimpleItemComponentModule,
    EmployeeTitleModule,
    CardItemComponentModule,
    TeamListItemDescriptionModule,
    CardItemWithChecklistComponentModule,
    ChecklistProgressModule,
    DueTimeDaysModule,
    AvatarHeaderComponentModule,
  ],
  declarations: [EmployeeItemComponent],
  providers: [],
  exports: [EmployeeItemComponent],
})
export class EmployeeItemComponentModule {}
