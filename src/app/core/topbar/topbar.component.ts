import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() toggle: EventEmitter<null> = new EventEmitter();

  clickToggle() {
    this.toggle.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
