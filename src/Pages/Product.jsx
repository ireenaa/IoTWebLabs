import React from 'react'
import all_product from '../Components/Assets/all_product';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  if (!product) {
    return <div>Not Found</div>;
  }
  
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product