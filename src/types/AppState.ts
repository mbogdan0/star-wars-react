import { Filters, FilterType } from './Filters';

export type AppState = {
  filters: Filters,
  filterType: FilterType,
  favourites: any[],
};
