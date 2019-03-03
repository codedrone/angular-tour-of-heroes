import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-dashboard-item',
  templateUrl: './hero-dashboard-item.component.html',
  styleUrls: ['./hero-dashboard-item.component.css']
})
export class HeroDashboardItemComponent implements OnInit {
  private _name = '';
  private isActive:boolean = true;
  @Output() clicked = new EventEmitter<string>();
  constructor() { }

  @Input()
  set name(name: string) {
      this._name = (name && name.trim()) || 'default name';
  }

  get name(): string {
      return this._name;
  }

  ngOnInit() {
  }

  onClick() {
      this.isActive = !this.isActive;

      let message = ' is non-active';

      if (this.isActive) {
          message = ' is active';
      }

      message = this._name + message;

      this.clicked.emit(message);
  }

}
