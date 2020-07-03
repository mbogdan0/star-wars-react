export type Filters = {
  movie: string[]; // array of ids
  species: string[];
  years: any;
};

export type FilterType = 'AND' | 'OR';