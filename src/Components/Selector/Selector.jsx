import React, { useState } from 'react';
import './Selector.css';

const Selector = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
  };

  return (
    <div className='selector-section'>
      <select
        id="sort_selector"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="">Sort Order</option>
        <option value="ASC">From a lower price</option>
        <option value="DESC">From a higher price </option>
      </select>
    </div>
  );
};

export default Selector;