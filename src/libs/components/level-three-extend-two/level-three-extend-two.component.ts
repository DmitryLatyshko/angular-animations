import {
  animate,
  group,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'dl-level-three-extend-two',
  templateUrl: './level-three-extend-two.component.html',
  styleUrls: ['./level-three-extend-two.component.scss'],
  animations: [
    trigger('appearingItems', [
      transition(':enter', [
        query('ul.users li', [
          style({
            opacity: 0,
            transform: 'translateY(-100px)',
          }),
          stagger(-50, [
            animate('1s 1s ease', style({ opacity: 1, transform: 'none' })),
          ]),
        ]),
      ]),
    ]),
    trigger('groupAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        }),
        group([
          animate('1s 1s ease', style({ transform: 'translateX(0)' })),
          animate('1s 1s ease', style({ opacity: 1 })),
        ]),
      ]),
    ]),
    trigger('sequenceAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        }),
        sequence([
          animate('1s 1s ease', style({ transform: 'translateX(0)' })),
          animate('1s 1s ease', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class DlLevelThreeExtendTwoComponent {
  public dlBlockOne = `@Component({
  selector: 'dl-level-three-extend-two',
  templateUrl: './level-three-extend-two.component.html',
  styleUrls: ['./level-three-extend-two.component.scss'],
  animations: [
    trigger('appearingItems', [
      transition(':enter', [
        query('ul.users li', [
          style({
            opacity: 0,
            transform: 'translateY(-100px)',
          }),
          stagger(-50, [
            animate('1s 1s ease', style({ opacity: 1, transform: 'none' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class DlLevelThreeExtendTwoComponent {
  constructor() {}
}`;

  public dlBlockTwo = `@Component({
  selector: 'dl-level-three-extend-two',
  templateUrl: './level-three-extend-two.component.html',
  styleUrls: ['./level-three-extend-two.component.scss'],
  animations: [
    trigger('groupAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        }),
        group([
          animate('1s 1s ease', style({ transform: 'translateX(0)' })),
          animate('1s 1s ease', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class DlLevelThreeExtendTwoComponent {
  constructor() {}
}`;

  public dlBlockThree = `@Component({
  selector: 'dl-level-three-extend-two',
  templateUrl: './level-three-extend-two.component.html',
  styleUrls: ['./level-three-extend-two.component.scss'],
  animations: [
    trigger('sequenceAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        }),
        sequence([
          animate('1s 1s ease', style({ transform: 'translateX(0)' })),
          animate('1s 1s ease', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class DlLevelThreeExtendTwoComponent {
  constructor() {}
}`;

  constructor() {}
}
