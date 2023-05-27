import { NgModule } from '@angular/core';
import { NavSidebarComponent } from './nav-sidebar.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        RouterLinkWithHref
    ],
  declarations: [NavSidebarComponent],
  providers: [],
  exports: [NavSidebarComponent],
})
export class NavSidebarComponentModule {}
