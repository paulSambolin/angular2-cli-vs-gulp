import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  	this.toolbarButtonSelect();
  }

  	// select the correct button based on current page
	toolbarButtonSelect(){
  		(<HTMLScriptElement>document.getElementById(location.pathname.slice(1) + "Button")).classList.add("toolbarButtonSelected");
	};


}
