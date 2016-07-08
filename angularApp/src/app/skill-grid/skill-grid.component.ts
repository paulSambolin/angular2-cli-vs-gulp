import { Component, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';


@Component({
  moduleId: module.id,
  selector: 'app-skill-grid',
  directives: [MD_GRID_LIST_DIRECTIVES],
  templateUrl: 'skill-grid.component.html',
  styleUrls: ['skill-grid.component.css']
})
export class SkillGridComponent implements OnInit {

  constructor() {

  }

    tiles= [
	    {text: 'Skill', cols: 1, rows: 1, color: 'lightblue'},
	    {text: 'Level', cols: 1, rows: 1, color: 'lightgreen'},
	    {text: 'Individuals', cols: 1, rows: 1, color: 'lightpink'},
	    {text: 'Next Step', cols: 1, rows: 1, color: '#DDBDF1'},
	    {text: 'C#', cols:1, rows: 3, color: 'lightblue'},
    	{text: 'Beginner', cols:1, rows: 1, color: 'lightgreen'},
    	{text: 'Paul', cols: 1, rows: 1, color: 'lightpink'},
    	{text: 'Practice', cols: 1, rows: 1, color: '#DDBDF1'},
    	{text: 'Advanced', cols:1, rows: 1, color: 'lightgreen'}
	];

  ngOnInit() {
  }

}
