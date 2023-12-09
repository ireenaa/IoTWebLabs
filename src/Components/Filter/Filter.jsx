import React, { useState } from 'react';
import Selector from '../Selector/Selector';

const Filter = ({ onSearch, onSortChange }) => {
  const [sortValue, setSortValue] = useState('');

  const handleSortChange = (selectedValue) => {
    setSortValue(selectedValue);
    onSortChange(selectedValue);
  }

  return (
    <div className='filter'>
      <Selector onChange={handleSortChange} />
    </div>
  );
}

export default Filter;
