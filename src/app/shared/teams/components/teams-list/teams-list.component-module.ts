import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';
import { CommonModule } from '@angular/common';
import { CardItemComponentModule } from '../../../core/components/card-item/card-item.component-module';
import { TeamListItemDescriptionModule } from '../../../core/pipes/team-list-item-description/team-list-item-description.module';
import {
    RedirectOnClickDirectiveModule
} from "../../../core/directives/redirect-on-click/redirect-on-click.directive-module";

@NgModule({
    imports: [
        CommonModule,
        CardItemComponentModule,
        TeamListItemDescriptionModule,
        RedirectOnClickDirectiveModule,
    ],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
