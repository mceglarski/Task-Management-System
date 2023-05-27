import { NgModule } from '@angular/core';
import { NavTopBarComponent } from './nav-top-bar.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        RouterLinkWithHref
    ],
  declarations: [NavTopBarComponent],
  providers: [],
  exports: [NavTopBarComponent],
})
export class NavTopBarComponentModule {}
