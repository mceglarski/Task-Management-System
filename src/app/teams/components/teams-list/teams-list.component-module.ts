import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';
import { CommonModule } from '@angular/common';
import { CardItemComponentModule } from '../../../core/components/card-item/card-item.component-module';

@NgModule({
  imports: [CommonModule, CardItemComponentModule],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
