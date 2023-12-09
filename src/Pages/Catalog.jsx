import React, { useState, useEffect } from 'react';
import './CSS/Catalog.css';
import axios from 'axios';
import Item from '../Components/Item/Item';
import "../Components/Search/Search.css"
import { searchCars, sortCars } from '../api';
import Spinner from '../Components/Spinner/Spinner'; 
import Selector from '../Components/Selector/Selector';
import "../Components/Selector/Selector.css"

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3001/api/cars');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setLoading(false);
  };

  const handleSearchClick = async () => {
    try {
      const result = await searchCars(searchTerm);
      setSearchResults(result);
      setLoading(false);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  const handleSortChange = async (newSortOrder) => {
    try {
      setSortOrder(newSortOrder);
      setLoading(true);
      const sortedResults = await sortCars('price', newSortOrder);
      setSearchResults(sortedResults);
    } catch (error) {
      console.error('Error during sorting:', error);
    } finally {
      setLoading(false);
    }
  };

  const itemsToDisplay = searchResults.length > 0 ? searchResults : products;

  return (
    <div className='catalog'>
      <div>
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
        onClick={handleSearchClick}>
        Search
      </button>
      <Selector onSort={handleSortChange} />
      </div>
        
      </div>
      <div className="catalog-right">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          itemsToDisplay.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;




