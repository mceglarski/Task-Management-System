import { NgModule } from '@angular/core';
import { EmployeeItemComponent } from './employee-item.component';
import { EmployeeRoutingModule } from './employee-routing';
import { CommonModule } from '@angular/common';
import { SimpleMediaItemComponentModule } from '../../../shared/core/components/simple-media-item/simple-media-item.component-module';
import { MediaHeaderComponentModule } from '../../../shared/core/components/media-header/media-header.component-module';
import { EmployeeTitleModule } from '../../../shared/core/pipes/employee-title/employee-title.module';
import { CardItemComponentModule } from '../../../shared/core/components/card-item/card-item.component-module';
import { TeamListItemDescriptionModule } from '../../../shared/core/pipes/team-list-item-description/team-list-item-description.module';

@NgModule({
  imports: [
    EmployeeRoutingModule,
    CommonModule,
    SimpleMediaItemComponentModule,
    MediaHeaderComponentModule,
    EmployeeTitleModule,
    CardItemComponentModule,
    TeamListItemDescriptionModule,
  ],
  declarations: [EmployeeItemComponent],
  providers: [],
  exports: [EmployeeItemComponent],
})
export class EmployeeItemComponentModule {}
