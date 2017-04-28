import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)', opacity: '1'})),
      transition(':enter', [style({transform: 'translateX(-100px)', opacity: '0'}), animate('600ms ease-out')]),
      transition(':leave', [animate('400ms ease-in', style({transform: 'translateX(60px)', opacity: '1'}))])
    ])
  ]
})
export class HomeComponent implements OnInit {

  state  : string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

}
