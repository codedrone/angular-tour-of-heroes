import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDashboardItemComponent } from './hero-dashboard-item.component';

describe('HeroDashboardItemComponent', () => {
  let component: HeroDashboardItemComponent;
  let fixture: ComponentFixture<HeroDashboardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDashboardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDashboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
