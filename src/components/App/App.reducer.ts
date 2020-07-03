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

const FAVORITE_ADD_ITEM = 'FAVORITE_ADD_ITEM';
type FavoriteAddItemAction = {
  type: typeof FAVORITE_ADD_ITEM;
  payload: string;
}

const FAVORITE_DELETE_ITEM = 'FAVORITE_DELETE_ITEM';
type FavoriteDeleteItemAction = {
  type: typeof FAVORITE_DELETE_ITEM;
  payload: string;
}

export type AppActions =
  FilterChangeFilmAction |
  FilterTypeChangeAction |
  FilterChangeSpeciesAction |
  FilterChangeYearsAction |
  FavoriteAddItemAction |
  FavoriteDeleteItemAction;


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
    case FAVORITE_ADD_ITEM:
      const addFav = state.favorites.includes(action.payload)
        ? [...state.favorites]
        : [...state.favorites, action.payload];
      return {
        ...state,
        favorites: addFav,
      };
    case FAVORITE_DELETE_ITEM:
      return {
        ...state,
        favorites: [...state.favorites].filter(item => item !== action.payload),
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
  favorites: JSON.parse(localStorage.getItem('favs-data') || '[]'),
};

export type AppContextType = {
  dispatch: Dispatch<AppActions>,
  state: AppState
};
