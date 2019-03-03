import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
  messages: string[] = [];

  constructor(private heroService: HeroService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {this.heroes = heroes;this.spinner.hide();});
  }

  add(name: string): void {
    name = name.trim();
    this.spinner.show();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.spinner.hide();
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  onClickItem(message: string) {
    this.messages.push(message);
  }
}
