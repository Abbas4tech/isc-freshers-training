export type NavLink = {
  name: string;
  path?: string;
};

// export type University = {
//   _id: string;
//   name: string;
//   logoUrl: string;
//   location: {
//     landmark: string;
//     country: string;
//   };
//   iscRanking: number;
//   AcceptanceRate: string;
//   description: string;
// };

export type UniversityItem = {
  _id: string;
  name: string;
  logo: string;
  address: {
    city: string;
    state: string;
    region: string;
  };
  description: string;
};

export type Universities = UniversityItem[];

export type FilterType = 'radio' | 'checkbox';

export type Filter = {
  name: string;
  type: FilterType;
  options: string[];
};
