import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSidebarEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    console.log('Toggling sidebar!')
    this.toggleSidebarEvent.emit('Driss')
  }

}
