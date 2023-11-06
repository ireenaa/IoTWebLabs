import React, { useState } from 'react';
import './CSS/Catalog.css';
import all_product from '../Components/Assets/all_product.js';
import Item from '../Components/Item/Item';
import Search from '../Components/Search/Search.jsx';
import Selector from '../Components/Selector/Selector';
import Filter from '../Components/Filter/Filter.jsx';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }

  const handleSortChange = (selectedValue) => {
    setSortOrder(selectedValue);
  }

  const sortProducts = (products, order) => {
    if (order === 'from a cheaper price') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === 'from a higher price') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products; 
    }
  }

  const filteredProducts = all_product.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div className='catalog'>
      <Filter onSearch={handleSearch} onSortChange={handleSortChange} />
      <div className="catalog-right">
        {sortedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
