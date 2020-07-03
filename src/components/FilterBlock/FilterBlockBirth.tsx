import React, { ChangeEvent, FC } from 'react';
import { useApp } from '../App/hooks/useApp';

export const FilterBlockBirth: FC = () => {
  const { actions: { changeYear }, filters: { years } } = useApp();
  const minYear = 896;
  const maxYear = 8;

  const changeBirthFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    changeYear(value);
  };

  return (
    <div className="block-filters">
      <div style={{ fontWeight: 'bolder' }}>Birth Year</div>
      <input
        onChange={changeBirthFilter}
        style={{ direction: 'rtl' }}
        value={years}
        type="range"
        min={0}
        max={minYear}
      />
      <div style={{ marginTop: '6px' }}>
        {years < maxYear ? 'any' : `birth before ${years}BBY`}
      </div>
    </div>
  );
};
