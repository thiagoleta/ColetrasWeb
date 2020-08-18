import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(e): void {

    this.collapsed = !this.collapsed;
  }

}
