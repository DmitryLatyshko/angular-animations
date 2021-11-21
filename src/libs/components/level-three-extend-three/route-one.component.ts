import { Component } from '@angular/core';

@Component({
  selector: 'dl-route-one',
  template: `Component for: Route one`,
  styles: [
    `
      :host {
        font-size: 30px;
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #ff3c3c;
        border-radius: 10px;
      }
    `,
  ],
})
export class DlRouteOneComponent {
  constructor() {}
}
