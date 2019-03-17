import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpen = true;
  @Output() toggle: EventEmitter<null> = new EventEmitter();

  clickToggle() {
    this.toggle.emit();
  }


  constructor() { }

  ngOnInit() {
  }

}
