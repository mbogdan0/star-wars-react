import React, { FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { People } from '../../types/People';
import { parseFields } from '../../utils/parseFields';
import { useApp } from '../App/hooks/useApp';
import { ComponentItem } from './ComponentItem';


export const ContentList: FC = () => {
  const [data, setData] = useState<People[]>([]);
  const [shown, setShown] = useState<People[]>([]);
  const { filters, filterType } = useApp();

  useEffect(() => {
    fetchRequest('https://swapi.dev/api/people/').then((response) => {
      const parsedResponse = parseFields({
        response,
        fields: ['url', 'species', 'films', 'starships', 'birth_year'],
      });
      setData(parsedResponse);
      setShown(parsedResponse);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const AND = filterType === 'AND';
      const arrayMethodFilter = AND ? 'every' : 'some';

      let movieFilter = true;
      let specieFilter = true;
      let yearFilter = true;

      if (filters.movie.length) {
        movieFilter = filters.movie[arrayMethodFilter]((movieId) => item.films.includes(movieId))
      }
      if (filters.species.length) {
        specieFilter = filters.species[arrayMethodFilter]((specieId) => item.species.includes(specieId))
      }
      if (filters.years >= 8) { // hardcoded min year is 8
        if (!item.birth_year_value) {
          yearFilter = false; // no year
        } else {
          yearFilter = item.birth_year_value >= filters.years;
        }
      }
      return movieFilter && specieFilter && yearFilter;
    });
    setShown(filteredData);
  }, [filters, filterType, data]);

  return (
    <div>
      {data.length === 0 && (
        <div className="loading-content">Loading...</div>
      )}
      {data.length > 0 && shown.length === 0 && (
        <div className="loading-content">No Data</div>
      )}

      <div>
        {shown.length} items found
      </div>
      {shown.map((item, index) => (
        <ComponentItem
          index={index}
          name={item.name}
          id={item.url}
          key={item.url}
        />
      ))}
    </div>
  );
};
