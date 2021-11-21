import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DlRouteOneComponent } from './route-one.component';
import { DlRouteThreeComponent } from './route-three.component';
import { DlRouteTwoComponent } from './route-two.component';

const routes: Routes = [
  {
    path: 'level-three-extend-three/route-one',
    component: DlRouteOneComponent,
    data: {
      animation: 'route-one',
    },
  },
  {
    path: 'level-three-extend-three/route-two',
    component: DlRouteTwoComponent,
    data: {
      animation: 'route-two',
    },
  },
  {
    path: 'level-three-extend-three/route-three',
    component: DlRouteThreeComponent,
    data: {
      animation: 'route-three',
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
