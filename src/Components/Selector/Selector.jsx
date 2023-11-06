import React from 'react';
import '../Selector/Selector.css';
import carTypes from '../CarTypes';

const Selector = ({ onChange }) => {
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className='selector'>
      <select id="type" onChange={handleSortChange}>
        {carTypes.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
