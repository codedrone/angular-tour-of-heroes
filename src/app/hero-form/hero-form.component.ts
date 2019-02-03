import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

	hero = {
		id: 1,
		name: 'Name'
	}
	
  constructor() { }

  ngOnInit() {
  }

}
