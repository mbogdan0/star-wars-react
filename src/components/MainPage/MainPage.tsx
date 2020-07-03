import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import { ContentList } from './ContentList';
import { FavoritesBox } from './FavoritesBox';

export const MainPage: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="main-page">
        <div className="body">
          <ContentList />
        </div>
        <div className="filters">
          <FavoritesBox />

          <FilterBlock />
        </div>
      </div>
    </DndProvider>
  );
};
