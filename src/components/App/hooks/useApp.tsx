import { useContext, useEffect } from 'react';
import { AppContext } from '../App';


export const useApp = () => {
  const { dispatch, state } = useContext(AppContext);
  useEffect(() => {
    localStorage.setItem('favs-data', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const changeFilm = ({ value, active }: { value: string, active: boolean }) => {
    const currentState = [...state.filters.movie];
    if (active) {
      currentState.push(value);
    } else {
      currentState.splice(currentState.indexOf(value), 1);
    }
    dispatch({
      type: 'FILTER_CHANGE_FILM',
      payload: currentState
    });
  };

  const changeSpecies =({ value, active }: { value: string, active: boolean }) => {
    const currentState = [...state.filters.species];
    if (active) {
      currentState.push(value);
    } else {
      currentState.splice(currentState.indexOf(value), 1);
    }
    dispatch({
      type: 'FILTER_CHANGE_SPECIES',
      payload: currentState
    });
  };

  const changeYear = (payload: number) => {
    dispatch({
      type: 'FILTER_CHANGE_YEARS',
      payload,
    });
  };


  const changeType = (payload: 'AND' | 'OR') => {
    dispatch({
      type: 'FILTER_TYPE_CHANGE',
      payload,
    });
  };

  const addFavorite = (payload: string) => {
    dispatch({
      type: 'FAVORITE_ADD_ITEM',
      payload,
    });
  };

  const deleteFavorite = (payload: string) => {
    dispatch({
      type: 'FAVORITE_DELETE_ITEM',
      payload,
    });
  };

  return {
    ...state,
    actions: {
      changeType,
      changeFilm,
      changeSpecies,
      changeYear,
      addFavorite,
      deleteFavorite,
    }
  };
};
