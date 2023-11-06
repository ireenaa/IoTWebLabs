import React, { useState } from 'react';
import Item from '../Item/Item';
import '../Item/Item.css';

const Items = ({ initialCount, products }) => {
  const [count, setCount] = useState(initialCount);

  const visibleProducts = products.slice(0, count); 

  const handleViewMore = () => {
    setCount(count + 3); 
  };

  return (
    <div className='main'>
      {visibleProducts.map((item, i) => (
        <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
      ))}
      {count < products.length && (
        <button onClick={handleViewMore} className="view-more-button">View more</button>
      )}
    </div>
  );
}

export default Items;
