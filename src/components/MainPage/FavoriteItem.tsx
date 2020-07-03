import React, { FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { People } from '../../types/People';
import { useApp } from '../App/hooks/useApp';


type Props = {
  id: string;
}
export const FavoriteItem: FC<Props> = ({ id }: Props) => {
  const { actions: { deleteFavorite } } = useApp();
  const [data, setData] = useState<People | null>(null);
  useEffect(() => {
    fetchRequest(`https://swapi.dev/api/people/${id}/`).then((resp: any) => {
      setData(resp);
    }).catch(console.error);
  }, [id]);
  const handleDelete = (url: string) => {
    const id = url.split('/')[5];
    deleteFavorite(id);
  };

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.name}{' '}
      <span
        onClick={() => handleDelete(data?.url)}
        className="link-span"
      >[x]</span>
    </div>
  );
};
