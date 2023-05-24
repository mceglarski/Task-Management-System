import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavSidebarComponentModule } from './core/components/nav-sidebar/nav-sidebar.component-module';
import { NavTopBarComponentModule } from './core/components/nav-top-bar/nav-top-bar.component-module';
import { EffectsModule } from '@ngrx/effects';
import { TeamsEffects } from './state/store/teams/store/teams.effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './state/app.state';
import { ProjectsEffects } from './state/store/projects/store/projects.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([TeamsEffects, ProjectsEffects]),
    RouterOutlet,
    NavSidebarComponentModule,
    NavTopBarComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
