import React from 'react'
import './ProductDisplay.css'


const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="product-left">
            <div className="product-img">
                <img src={product.image} alt="" />
            </div>   

        </div>
        <div className="product-right">
        <h1>{product.name}</h1>
        
        <div className="product-description">{product.description}

        </div>
        <div className="product-price">${product.price}
        </div>
      <button>ADD TO CART</button>
      
        </div>
    </div>
  )
}

export default ProductDisplay