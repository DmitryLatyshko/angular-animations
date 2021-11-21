import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'dl-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0, opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class DlLevelThreeComponent {
  public isExpandedFirst: boolean = false;
  public firstState: string = 'initial';
  public isExpandedSecond: boolean = false;
  public secondState: string = 'initial';

  public dlBlockOneComponent = `@Component({
  selector: 'dl-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0, opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class DlLevelThreeComponent {
  public isExpandedFirst: boolean = false
  public firstState: string = 'initial';
  public isExpandedSecond: boolean = false
  public secondState: string = 'initial';

  constructor() {}

  public expandFirst(): void {
    this.isExpandedFirst = !this.isExpandedFirst;
    this.firstState = this.isExpandedFirst ? 'expanded' : 'initial';
  }

  public expandSecond(): void {
    this.isExpandedSecond = !this.isExpandedSecond;
    this.secondState = this.isExpandedSecond ? 'expanded' : 'initial';
  }
}`;

  public dlBlockOneTemplate = `<h3 (click)="expandFirst()">Toggle first panel</h3>
<div [@expandedPanel]="firstState" style="overflow: hidden;">
  <h1>Title first</h1>
  <p>Expanded panel first</p>
</div>
<h3 (click)="expandSecond()">Toggle second panel</h3>
<div [@expandedPanel]="secondState" style="overflow: hidden;">
  <h1>Title second</h1>
  <p>Expanded panel second</p>
</div>`;

  public dlBlockCodeVoid = `<div @animationTriggerName *ngIf="isVisible">
  <h1>Welcome to Hell!</h1>
</div>

trigger('animationTriggerName', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1.2s', style({ opacity: 1 })),
  ]),
  transition('* => void', [
    animate('1.2s', style({ opacity: 0 })),
  ]),
])`;

  public dlBlockCodeAnimation = `animate(
  '1.25s',
  keyframes([
    style({ fontSize: '12px', offset: 0 }),
    style({ fontSize: '18px', offset: 0.67 }),
    style({ fontSize: '16px', offset: 1 }),
  ])
)`;

  public dlBlockCodeEvents = `<div
  [@animateName]="currentState"
  (@animateName.start)="whenAnimate($event)"
  (@animateName.done)="whenAnimate($event)"
>
  <h1>Welcome to Hell!</h1>
</div>

whenAnimate(event){
    console.log(event);
}`;

  constructor() {}

  public expandFirst(): void {
    this.isExpandedFirst = !this.isExpandedFirst;
    this.firstState = this.isExpandedFirst ? 'expanded' : 'initial';
  }

  public expandSecond(): void {
    this.isExpandedSecond = !this.isExpandedSecond;
    this.secondState = this.isExpandedSecond ? 'expanded' : 'initial';
  }
}
