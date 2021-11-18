import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isPatientExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePatientTreeView() {
    this.isPatientExpanded = !this.isPatientExpanded;
  }

}
