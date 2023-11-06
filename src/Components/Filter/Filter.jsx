import React, { useState } from 'react';
import Search from '../Search/Search'
import Selector from '../Selector/Selector';
import all_product from '../Assets/all_product';
import Item from '../Item/Item'

const Filter = ({ onSearch, onSortChange }) => {
  const [sortValue, setSortValue] = useState('');

  const handleSortChange = (selectedValue) => {
    setSortValue(selectedValue);
    onSortChange(selectedValue);
  }

  return (
    <div className='filter'>
      <Search onSearch={onSearch} />
      <Selector onChange={handleSortChange} />
    </div>
  );
}

export default Filter;
