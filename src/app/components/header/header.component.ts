import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'isc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  screenWidth!: number;

  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.screenWidth <= 650 ? (this.isMobile = true) : (this.isMobile = false);
  }

  ngOnInit(): void {
    if (window.innerWidth <= 650) this.isMobile = true;
  }
}
