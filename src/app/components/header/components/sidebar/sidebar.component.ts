import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
