import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdButton, MdAnchor } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-splash',
  directives: [ROUTER_DIRECTIVES, MdButton, MdInput, MdAnchor],
  templateUrl: 'splash.component.html',
  styleUrls: ['splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
