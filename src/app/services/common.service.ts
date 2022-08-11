import { Injectable } from '@angular/core';
import { Filter, NavLink, Universities } from './model/common.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  // universityData: University[] = [
  //   {
  //     _id: '1',
  //     name: 'Massachusettes Institute Of Technology',
  //     logo: '../../assets/logo.png',
  //     address: {
  //       city: 'Cambridge, Massachusettes',

  //       state: 'Phalna',
  //       region: 'United States Of America',
  //     },
  //     iscRanking: 4,
  //     AcceptanceRate: '20%',
  //     description:
  //       'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.led it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de',
  //   },
  //   {
  //     _id: '2',
  //     name: 'Massachusettes Institute Of Technology',
  //     logoUrl: '../../assets/logo.png',
  //     location: {
  //       landmark: 'Cambridge, Massachusettes',
  //       country: 'United States Of America',
  //     },
  //     iscRanking: 2,
  //     AcceptanceRate: '40%',
  //     description:
  //       'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.led it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de',
  //   },
  //   {
  //     _id: '3',
  //     name: 'Massachusettes Institute Of Technology',
  //     logoUrl: '../../assets/logo.png',
  //     location: {
  //       landmark: 'Cambridge, Massachusettes',
  //       country: 'United States Of America',
  //     },
  //     iscRanking: 5,
  //     AcceptanceRate: '80%',
  //     description:
  //       'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.led it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de',
  //   },
  //   {
  //     _id: '4',
  //     name: 'Massachusettes Institute Of Technology',
  //     logo: '../../assets/logo.png',
  //     location: {
  //       landmark: 'Cambridge, Massachusettes',
  //       country: 'United States Of America',
  //     },
  //     iscRanking: 3,
  //     AcceptanceRate: '60%',
  //     description:
  //       'Massachusettes Institute Of Technology has the mission to advance knowledge and educate students in science,technology and other areas that will best serve the nation and the world. The university moulds the students to be productive, imaginative and welcome all the talented students regardless of where they came from.led it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de',
  //   },
  // ];

  filterData: Filter[] = [
    {
      name: 'Degree',
      type: 'checkbox',
      options: [
        'Masters',
        'Bachelors',
        'Doctorate',
        'Associate',
        'Professional Certificate',
        'Diploma',
        'Post Graduate Diploma',
        'Undergraduate Certificate',
        'Graduate Certificate',
        'Post Graduate Certificate',
      ],
    },
    {
      name: 'Tution Fee',
      type: 'radio',
      options: [
        '0,000 USD/year or less',
        '50,000 USD/year or less',
        '70,000 USD/year or less',
        '90,000 USD/year or less',
        'More than 90,000 USD/year',
      ],
    },
  ];

  constructor(private _http: HttpClient) {}

  getNavLinks() {
    console.log(environment.production, environment.backend_url);
    return this.navlinks;
  }

  getUniversityData() {
    return this._http.get<Universities>(`${environment.backend_url}/`);
  }

  getUniversityFromId(id: string) {
    console.log(id);
    return this._http.get<Universities>(`${environment.backend_url}/${id}`);
  }

  getFiltersData() {
    return this.filterData;
  }
}
