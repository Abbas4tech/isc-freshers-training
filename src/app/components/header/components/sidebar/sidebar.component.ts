import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavLink } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() navLinks!: NavLink[];

  isOpen: boolean = false;

  constructor(private _commonService: CommonService) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
