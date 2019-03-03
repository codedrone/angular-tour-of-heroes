import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  messages: string[] = [];

  constructor(private heroService: HeroService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {this.heroes = heroes.slice(1, 5);this.spinner.hide();});
  }
  onClickItem(message: string) {
    this.messages.push(message);
  }

}
