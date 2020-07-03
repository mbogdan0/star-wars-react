import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { Film } from '../../types/Film';
import { useApp } from '../App/hooks/useApp';

export const FilterBlockFilms: FC = () => {

  const { actions: { changeFilm } } = useApp();
  const [filmsFilter, setFilmsFilter] = useState<Film[]>([]);

  useEffect(() => {
    fetchRequest('https://swapi.dev/api/films').then((data) => {
      const films = data.reduce((arr, curr) => [...arr, {
        id: curr.episode_id,
        title: curr.title,
      }], []);
      setFilmsFilter(films);
    }).catch(console.error);
  }, []);

  const changeFilmFilter = (e: ChangeEvent<HTMLInputElement>) => {
    changeFilm({
      active: e.target.checked,
      value: e.target.value.toString()
    });
  }

  return (
    <div className="block-filters">
      <div style={{ fontWeight: 'bolder' }}>Films</div>
      {filmsFilter.length > 0 && filmsFilter.map((item) =>
          (
            <div key={item.id}>
              <label>
                <input type="checkbox" onChange={changeFilmFilter} value={item.id} /> {item.title}
              </label>
            </div>
          )
      )}
      {filmsFilter.length === 0 && (
        <div className="loading-filter">loading...</div>
      )}
    </div>
  );
};
