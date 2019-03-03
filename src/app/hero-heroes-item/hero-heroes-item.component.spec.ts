import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHeroesItemComponent } from './hero-heroes-item.component';

describe('HeroHeroesItemComponent', () => {
  let component: HeroHeroesItemComponent;
  let fixture: ComponentFixture<HeroHeroesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHeroesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHeroesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
