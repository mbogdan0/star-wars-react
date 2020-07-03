import React, { FC } from 'react';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import { ContentList } from './ContentList';

export const MainPage: FC = () => {
  return (
    <div className="main-page">
      <div className="body">
        <ContentList />
      </div>
      <div className="filters">
        <FilterBlock />
      </div>
    </div>
  );
};
