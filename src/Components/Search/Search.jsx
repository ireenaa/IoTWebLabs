import React, { useState } from 'react';
import '../Search/Search.css';
import { searchCars } from '../../api'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearchClick = async () => {
    try {
      const result = await searchCars(searchTerm);
      setSearchResults(result);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className='search-section'>
      <input
        type="text"
        id="search_section"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="search_button"
        id="search_button"
        onClick={handleSearchClick}
      >
        Search
      </button>
      
      </div>
  );
}
