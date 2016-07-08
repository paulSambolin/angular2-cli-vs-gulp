import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar';
import { SkillGridComponent } from '../skill-grid';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  directives: [ToolbarComponent, SkillGridComponent],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
