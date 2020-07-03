import React, { FC, useEffect, useState } from 'react';
import { fetchRequest } from '../../utils/fetchRequest';
import { Spaceship } from '../../types/Spaceship';

type Props = {
  url: string;
}
export const PersonPageSpaceships: FC<Props> = ({ url }: Props) => {
  const [data, setData] = useState<Spaceship | null>(null);
  useEffect(() => {
    fetchRequest(url).then((resp: any) => {
      setData(resp);
    }).catch(console.error);
  }, [url]);

  return (
    <span style={{ display: 'inline-block', margin: '0 6px', textDecoration: 'underline' }}>
      {data?.name}
    </span>
  )
};
