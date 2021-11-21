import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';

export const reusableAnimation = animation([
  style({
    backgroundColor: '{{ backgroundColor }}',
    margin: '{{ margin }}',
    padding: 0,
  }),
  animate('{{ time }}'),
]);

@Component({
  selector: 'dl-level-three-extend-one',
  templateUrl: './level-three-extend-one.component.html',
  styleUrls: ['./level-three-extend-one.component.scss'],
  animations: [
    trigger('reusableAnimation', [
      transition(
        'initial <=> expanded',
        useAnimation(reusableAnimation, {
          params: {
            backgroundColor: '#fff',
            margin: '5px',
            time: '1s',
          },
        })
      ),
    ]),
  ],
})
export class DlLevelThreeExtendOneComponent {
  public isExpandedFirst: boolean = false;
  public firstState: string = 'initial';
  public dlBlockOne = `export const reusableAnimation = animation([
  style({
    backgroundColor: '{{ backgroundColor }}',
    margin: '{{ margin }}',
    padding: 0,
  }),
  animate('{{ time }}'),
]);

@Component({
  selector: 'dl-level-three-extend-one',
  templateUrl: './level-three-extend-one.component.html',
  styleUrls: ['./level-three-extend-one.component.scss'],
  animations: [
    trigger('reusableAnimation', [
      transition(
        'initial <=> expanded',
        useAnimation(reusableAnimation, {
          params: {
            backgroundColor: '#fff',
            margin: '5px',
            time: '1s',
          },
        })
      ),
    ]),
  ],
})
export class DlLevelThreeExtendOneComponent {
  public isExpandedFirst: boolean = false;
  public firstState: string = 'initial';

  constructor() {}

  public changeFirstState(): void {
    this.isExpandedFirst = !this.isExpandedFirst;
    this.firstState = this.isExpandedFirst ? 'expanded' : 'initial';
  }
}`;

  constructor() {}

  public changeFirstState(): void {
    this.isExpandedFirst = !this.isExpandedFirst;
    this.firstState = this.isExpandedFirst ? 'expanded' : 'initial';
  }
}
