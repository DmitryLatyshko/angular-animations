import { Component } from '@angular/core';

@Component({
  selector: 'dl-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss'],
})
export class DlLevelOneComponent {
  public dlBlockOne = `.dl-block-animation-one {
  width: 200px;
  min-height: 200px;
  background-color: rgb(193, 224, 202);

  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 0s;
  // transition: background-color 1s linear 0s;

  &:hover {
    background-color: rgb(190, 36, 36);
  }
}`;

  public dlBlockTwo = `.dl-block-animation-two {
  width: 200px;
  min-height: 200px;
  background-color: rgb(193, 224, 202);
  border: 20px solid rgb(245, 41, 41);
  box-sizing: border-box;

  transition-property: background-color, border-color;
  transition-duration: 1s, 2s;
  transition-timing-function: linear;
  transition-delay: 0s;
  // transition: background-color 1s linear 0s, border-color 1s linear 0s;

  &:hover {
    background-color: rgb(190, 36, 36);
    border-color: rgb(24, 24, 218);
  }
}`;

  constructor() {}
}
