export type NavLink = {
  name: string;
  path?: string;
};

export type University = {
  universityID: number;
  name: string;
  logoUrl: string;
  location: {
    landmark: string;
    country: string;
  };
  iscRanking: number;
  AcceptanceRate: string;
  description: string;
};

export type FilterType = 'radio' | 'checkbox';

export type Filter = {
  name: string;
  type: FilterType;
  options: string[];
};
