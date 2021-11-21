import { Component } from '@angular/core';

@Component({
  selector: 'dl-route-three',
  template: `<div>Component for: Route three</div>`,
  styles: [
    `
      :host {
        font-size: 30px;
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #33df4d;
        border-radius: 10px;
      }
    `,
  ],
})
export class DlRouteThreeComponent {
  constructor() {}
}
