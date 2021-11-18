import { Component } from '@angular/core';

@Component({
  selector: 'dl-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss'],
})
export class DlLevelTwoComponent {
  public dlBlockOne = `.dl-block-animation-one {
  background: rgb(2, 126, 2);
  border-radius: 100%;
  width: 100px;
  height: 100px;

  animation-name: pulsing;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;

  // animation: pulsing 2s ease 0s infinite normal none running;
}

@keyframes pulsing {
  0% {
    transform: scale(0.5, 0.5)
  }
  50% {
    transform: scale(1.0, 1.0);
  }
  100% {
    transform: scale(0.5, 0.5);
  }
}`;

  constructor() {}
}
