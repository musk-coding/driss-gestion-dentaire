import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleSidebarEvent = new EventEmitter<any>();

  public showDropdown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit()
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

}
