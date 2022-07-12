import { Injectable } from '@angular/core';
import { NavLink } from './model/common.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  navlinks: NavLink[] = [
    {
      name: 'Explore Schools',
      path: '/explore-schools',
    },
    {
      name: 'Sign Up >',
      path: '/Hello',
    },
    {
      name: 'Sign In >',
      path: '/Shallow',
    },
  ];

  constructor() {}

  getNavLinks() {
    return this.navlinks;
  }
}
