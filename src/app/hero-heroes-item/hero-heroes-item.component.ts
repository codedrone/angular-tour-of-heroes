import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-heroes-item',
  templateUrl: './hero-heroes-item.component.html',
  styleUrls: ['./hero-heroes-item.component.css']
})
export class HeroHeroesItemComponent implements OnInit {
  private _hero: Hero;
  private isActive:boolean = true;
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  @Input()
  set hero(hero: Hero) {
      this._hero = hero;
  }

  get hero(): Hero {
      return this._hero;
  }

  ngOnInit() {
  }

  onClick() {
      this.isActive = !this.isActive;

      let message = ' is non-active';

      if (this.isActive) {
          message = ' is active';
      }

      message = this._hero.name + message;

      this.clicked.emit(message);
  }

}
