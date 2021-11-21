import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routeChangeAnimation } from 'src/libs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeChangeAnimation],
})
export class AppComponent {
  public get isShowHiddenRoutes(): boolean {
    if (this.router.url.startsWith('/level-three-extend-three')) {
      return true;
    }
    return false;
  }

  constructor(protected readonly router: Router) {}

  public getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
