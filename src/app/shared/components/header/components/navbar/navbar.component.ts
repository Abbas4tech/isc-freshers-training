import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() onSidebar!: boolean;
  @Input() navLinks!: NavLink[];
  constructor() {}

  ngOnInit(): void {}
}
