import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'isc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() onSidebar!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
