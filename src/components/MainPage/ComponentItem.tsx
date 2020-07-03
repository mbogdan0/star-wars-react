import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  id: string;
  index: number;
}

export const ComponentItem: FC<Props> = ({ name, id, index }: Props) => {
  return (
    <div className="item-name">
      {index + 1}.{' '}
      <Link to={`/person/${id}`}>
        {name}
      </Link>
    </div>
  );
};
