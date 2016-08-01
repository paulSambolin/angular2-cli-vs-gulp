import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-splash',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'splash.component.html',
  styleUrls: ['splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
