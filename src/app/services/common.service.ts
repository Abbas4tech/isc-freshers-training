import { Injectable } from '@angular/core';
import { NavLink, University } from './model/common.model';

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

  universityData: University[] = [
    {
      universityID: Math.random(),
      name: 'Massachusettes Institute Of Technology',
      logoUrl: '../../assets/logo.png',
      location: {
        landmark: 'Cambridge, Massachusettes',
        country: 'United States Of America',
      },
      iscRanking: 4,
      AcceptanceRate: '20%',
      description:
        'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.',
    },
    {
      universityID: Math.random(),
      name: 'Massachusettes Institute Of Technology',
      logoUrl: '../../assets/logo.png',
      location: {
        landmark: 'Cambridge, Massachusettes',
        country: 'United States Of America',
      },
      iscRanking: 2,
      AcceptanceRate: '40%',
      description:
        'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.',
    },
    {
      universityID: Math.random(),
      name: 'Massachusettes Institute Of Technology',
      logoUrl: '../../assets/logo.png',
      location: {
        landmark: 'Cambridge, Massachusettes',
        country: 'United States Of America',
      },
      iscRanking: 5,
      AcceptanceRate: '80%',
      description:
        'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.',
    },
    {
      universityID: Math.random(),
      name: 'Massachusettes Institute Of Technology',
      logoUrl: '../../assets/logo.png',
      location: {
        landmark: 'Cambridge, Massachusettes',
        country: 'United States Of America',
      },
      iscRanking: 3,
      AcceptanceRate: '60%',
      description:
        'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.',
    },
  ];

  constructor() {}

  getNavLinks() {
    return this.navlinks;
  }
}
