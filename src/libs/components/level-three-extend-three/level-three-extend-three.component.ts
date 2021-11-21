import { Component } from '@angular/core';

@Component({
  selector: 'dl-level-three-extend-three',
  templateUrl: './level-three-extend-three.component.html',
  styleUrls: ['./level-three-extend-three.component.scss'],
})
export class DlLevelThreeExtendThreeComponent {
  public dlBlockCodeComponent = `@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [routeChangeAnimation],
})
export class AppComponent {
  constructor() {}

  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
}`;

  public dlBlockCodeStyle = `style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ])`;

  public dlBlockCodeQueryEnter = `query(':enter', [style({ left: '-100%' })])`;

  public dlBlockCodeQueryLeave = `query(':leave', animateChild())`;

  public dlBlockCodeGroupQueryLeave = `group([
  query(':leave', [ animate('300ms ease-out', style({ left: '100%' })), ]),
  query(':enter', [ animate('300ms ease-out', style({ left: '0%' })), ]),
])`;

  public dlBlockCodeGroupEnter = `query(':enter', animateChild())`;

  constructor() {}
}
