import React, { ChangeEvent, FC } from 'react';
import { useApp } from '../App/hooks/useApp';

export const FilterBlockType: FC = () => {
  const { actions: { changeType }, filterType } = useApp();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value as 'AND' | 'OR';
    changeType(val);
  }
  return (
    <div>
      <div>filter type</div>
      <label>
        <input
          type="radio"
          value="AND"
          defaultChecked={filterType === 'AND'}
          onChange={handleChange}
          name="filterType"
        /> AND
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="OR"
          defaultChecked={filterType === 'OR'}
          onChange={handleChange}
          name="filterType"
        /> OR
      </label>
    </div>
  )
};
