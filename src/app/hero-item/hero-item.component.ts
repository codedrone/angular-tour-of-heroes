import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {

	hero = {
		id: 1,
		name: 'Name'
	}

  constructor() { }

  ngOnInit() {
  }

}
