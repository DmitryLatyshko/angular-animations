import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeChangeAnimation = trigger('routeChangeAnimation', [
  transition('route-one <=> route-two', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('route-one <=> route-three', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('route-two <=> route-three', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
