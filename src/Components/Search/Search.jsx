import React, { useState } from 'react';
import '../Search/Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  }

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
        onClick={() => onSearch(searchTerm)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
