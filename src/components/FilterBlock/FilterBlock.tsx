import React, { FC } from 'react';
import { FilterBlockFilms } from './FilterBlockFilms';
import { FilterBlockType } from './FilterBlockType';
import { FilterBlockSpecies } from './FilterBlockSpecies';
import { FilterBlockBirth } from './FilterBlockBirth';

export const FilterBlock: FC = () => {
  return (
    <>
      <b>Filters</b>
      <div className="separator" />
      <FilterBlockFilms />
      <div className="separator" />
      <FilterBlockSpecies />
      <div className="separator" />
      <FilterBlockBirth />
      <div className="separator" />
      <FilterBlockType />
    </>
  )
};
