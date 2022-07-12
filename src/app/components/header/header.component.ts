import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavLink } from 'src/app/services/model/common.model';

@Component({
  selector: 'isc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  navLinks!: NavLink[];
  screenWidth!: number;

  constructor(private _commonService: CommonService) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.screenWidth <= 650 ? (this.isMobile = true) : (this.isMobile = false);
  }

  ngOnInit(): void {
    if (window.innerWidth <= 650) this.isMobile = true;
    this.navLinks = this._commonService.getNavLinks();
  }
}
