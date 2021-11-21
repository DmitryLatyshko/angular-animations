import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  DlLevelOneComponent,
  DlLevelThreeComponent,
  DlLevelThreeExtendOneComponent,
  DlLevelThreeExtendThreeComponent,
  DlLevelThreeExtendTwoComponent,
  DlLevelTwoComponent,
  DlLevelTwoExtendComponent,
  RoutingModule,
} from 'src/libs';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DlRoutingComponent } from './pages/routing/routing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'level-one',
    component: DlLevelOneComponent,
  },
  {
    path: 'level-two',
    component: DlLevelTwoComponent,
  },
  {
    path: 'level-two-extend',
    component: DlLevelTwoExtendComponent,
  },
  {
    path: 'level-three',
    component: DlLevelThreeComponent,
  },
  {
    path: 'level-three-extend-one',
    component: DlLevelThreeExtendOneComponent,
  },
  {
    path: 'level-three-extend-two',
    component: DlLevelThreeExtendTwoComponent,
  },
  {
    path: 'level-three-extend-three',
    component: DlRoutingComponent,
  },
];

@NgModule({
  declarations: [AppComponent, DlLevelThreeExtendThreeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
