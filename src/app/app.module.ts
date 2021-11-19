import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  DlLevelOneComponent,
  DlLevelThreeComponent,
  DlLevelThreeExtendComponent,
  DlLevelTwoComponent,
  DlLevelTwoExtendComponent,
} from 'src/libs';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

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
    path: 'level-three-extend',
    component: DlLevelThreeExtendComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
