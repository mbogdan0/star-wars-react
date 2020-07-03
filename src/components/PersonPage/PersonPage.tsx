import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchRequest } from '../../utils/fetchRequest';
import { People } from '../../types/People';
import { PersonPageFilms } from './PersonPageFilms';
import { PersonPageSpaceships } from './PersonPageSpaceships';

export const PersonPage: FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequest(`https://swapi.dev/api/people/${id}/`).then((resp: any) => {
      setData(resp);
      setLoading(false);
    }).catch(console.error);
  }, [id]);

  if (loading) {
    return <div className="loading-content">Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Main page</Link>
      <div className="separator" />
      <div><b>Name</b>: {data?.name}</div>
      <div><b>Birth year</b>: {data?.birth_year}</div>
      <div>
        <b>Films</b>:{' '}
        {data?.films?.length === 0 && <>none</>}
        {data?.films?.map((item) =>
          <PersonPageFilms url={item} key={item} />
        )}
      </div>
      <div>
        <b>Spaceships</b>:{' '}
        {data?.starships?.length === 0 && <>none</>}
        {data?.starships?.map((item) =>
          <PersonPageSpaceships url={item} key={item} />
        )}
      </div>
    </div>
  );
};
