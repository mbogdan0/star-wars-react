import { Dispatch } from 'react';
import { FilterType } from '../../types/Filters';
import { AppState } from '../../types/AppState';


const FILTER_CHANGE_FILM = 'FILTER_CHANGE_FILM';
type FilterChangeFilmAction = {
  type: typeof FILTER_CHANGE_FILM;
  payload: string[];
}

const FILTER_CHANGE_SPECIES = 'FILTER_CHANGE_SPECIES';
type FilterChangeSpeciesAction = {
  type: typeof FILTER_CHANGE_SPECIES;
  payload: string[];
}

const FILTER_CHANGE_YEARS = 'FILTER_CHANGE_YEARS';
type FilterChangeYearsAction = {
  type: typeof FILTER_CHANGE_YEARS;
  payload: number;
}

const FILTER_TYPE_CHANGE = 'FILTER_TYPE_CHANGE';
type FilterTypeChangeAction = {
  type: typeof FILTER_TYPE_CHANGE;
  payload: FilterType;
}

export type AppActions =
  FilterChangeFilmAction |
  FilterTypeChangeAction |
  FilterChangeSpeciesAction |
  FilterChangeYearsAction;


export const AppReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case FILTER_CHANGE_FILM:
      return {
        ...state,
        filters: {
          ...state.filters,
          movie: [
            ...action.payload
          ],
        }
      };
    case FILTER_CHANGE_SPECIES:
      return {
        ...state,
        filters: {
          ...state.filters,
          species: [
            ...action.payload
          ],
        }
      };
    case FILTER_CHANGE_YEARS: return {
      ...state,
      filters: {
        ...state.filters,
        years: action.payload < 8 ? null : action.payload,
      },
    };
    case FILTER_TYPE_CHANGE:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
};

export const initialApp: AppState = {
  filters: {
    years: 0,
    movie: [],
    species: [],
  },
  filterType: 'AND',
  favourites: [],
};

export type AppContextType = {
  dispatch: Dispatch<AppActions>,
  state: AppState
};
