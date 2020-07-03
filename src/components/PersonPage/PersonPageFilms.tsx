import React, { FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { Film } from '../../types/Film';

type Props = {
  url: string;
}
export const PersonPageFilms: FC<Props> = ({ url }: Props) => {
  const [data, setData] = useState<Film | null>(null);
  useEffect(() => {
    fetchRequest(url).then((resp: any) => {
      setData(resp);
    }).catch(console.error);
  }, [url]);

  return (
    <span style={{ display: 'inline-block', margin: '0 6px', textDecoration: 'underline' }}>
      {data?.title}
    </span>
  )
};
