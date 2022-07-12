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
