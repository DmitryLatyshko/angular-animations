import { Component } from '@angular/core';

@Component({
  selector: 'dl-route-two',
  template: `Component for: Route two`,
  styles: [
    `
      :host {
        font-size: 30px;
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #5472f5;
        border-radius: 10px;
      }
    `,
  ],
})
export class DlRouteTwoComponent {
  constructor() {}
}
