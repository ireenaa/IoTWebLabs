import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ViewMore from '../ViewMore/ViewMore';
import Spinner from '../Spinner/Spinner'; 

const Items = () => {
  const [products, setProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/api/cars');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleViewMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <div className='main'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {products.slice(0, itemsToShow).map((product, index) => (
            <Item key={index} id={product.id} name={product.name} image={product.image} price={product.price} />
          ))}
          {itemsToShow < products.length && (
            <ViewMore onViewMoreClick={handleViewMore} /> 
          )}
        </>
      )}
    </div>
  );
}

export default Items;
