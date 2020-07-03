import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { useApp } from '../App/hooks/useApp';
import { Species } from '../../types/Species';

export const FilterBlockSpecies: FC = () => {

  const { actions: { changeSpecies } } = useApp();
  const [speciesFilter, setSpeciesFilter] = useState<Species[]>([]);

  useEffect(() => {
    fetchRequest('https://swapi.dev/api/species/').then((data) => {
      const species = data.reduce((arr, curr) => [...arr, {
        id: curr.url.split('/')[5],
        name: curr.name,
      }], []);
      setSpeciesFilter(species);
    }).catch(console.error);
  }, []);

  const changeSpeciesFilter = (e: ChangeEvent<HTMLInputElement>) => {
    changeSpecies({
      active: e.target.checked,
      value: e.target.value.toString()
    });
  }

  return (
    <div className="block-filters">
      <div style={{ fontWeight: 'bolder' }}>Species</div>
      {speciesFilter.length > 0 && speciesFilter.map((item) =>
        (
          <div key={item.id}>
            <label>
              <input type="checkbox" onChange={changeSpeciesFilter} value={item.id} /> {item.name}
            </label>
          </div>
        )
      )}
      {speciesFilter.length === 0 && (
        <div className="loading-filter">loading...</div>
      )}
    </div>
  );
};
