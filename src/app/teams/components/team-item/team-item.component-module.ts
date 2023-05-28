import { NgModule } from '@angular/core';
import { TeamItemComponent } from './team-item.component';
import { CommonModule } from '@angular/common';
import { AvatarListComponentModule } from '../../../shared/core/components/avatar-list/avatar-list.component-module';
import { CardItemComponentModule } from '../../../shared/core/components/card-item/card-item.component-module';
import { CardItemWithChecklistComponentModule } from '../../../shared/core/components/card-item-with-checklist/card-item-with-checklist-component.module';
import { DueTimeModule } from '../../../shared/core/pipes/due-time/due-time.module';

@NgModule({
  imports: [
    CommonModule,
    AvatarListComponentModule,
    CardItemComponentModule,
    CardItemWithChecklistComponentModule,
    DueTimeModule,
  ],
  declarations: [TeamItemComponent],
  providers: [],
  exports: [TeamItemComponent],
})
export class TeamItemComponentModule {}
