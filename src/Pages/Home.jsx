import React, { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Items from '../Components/Items/Items';
import all_product from '../Components/Assets/all_product';

const Home = () => {
  const [itemsCount, setItemsCount] = useState(3); 

  const handleViewMoreClick = () => {
    setItemsCount(itemsCount + 3); 
  };

  return (
    <div>
      <Hero />
      <Items products={all_product.slice(0, itemsCount)} onViewMoreClick={handleViewMoreClick} /> 
      {itemsCount < all_product.length}
    </div>
  );
}

export default Home;
