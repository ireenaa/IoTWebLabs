import React, { useState } from 'react';
import './ProductDisplay.css';
import { useDispatch } from 'react-redux';
import all_product from '../Assets/all_product';
import p1_img from '../Assets/po.png'
import p2_img from '../Assets/audiq8.png';
import p3_img from '../Assets/mers.png';
import p4_img from '../Assets/mers2.png';
import p5_img from '../Assets/po.png';
import p6_img from '../Assets/porsche1.png';
import p7_img from '../Assets/vovlvo.png';
import p8_img from '../Assets/audia5.png';
import p9_img from '../Assets/blue.png';
import p10_img from '../Assets/gold.png';
import p11_img from '../Assets/green.png';
import p12_img from '../Assets/orange.png';
import p13_img from '../Assets/image_2023-11-02_20-22-57.png';
import { useNavigate } from 'react-router-dom';
import { incrementCount, decrementCount } from '../Cart/action';

let cardImages =[p1_img, p2_img, p3_img, p4_img, p5_img, p6_img, p7_img, p8_img, p9_img, p10_img, p11_img, p12_img, p13_img]

const ProductDisplay = ({ product }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    
    

    const addCar = () => {
        dispatch({
            type: "ADD_CAR",
            payload: {
                id: product.id,
                img: cardImages[product.id],
                name: product.name,
                description: product.description,
                price: product.price,
                count: count, 
            },
        });
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        navigate('/cart');
      };
    
      const handleIncrement = () => {
        setCount(count + 1); 
      };
    
      const handleDecrement = () => {
        if (count > 1) {
          setCount(count - 1)
        }
      };
    
      return (
        <div className="productdisplay">
          <div className="product-left">
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-description">{product.description}</div>
            <div className="product-controls">
              <button className="decrement-button" onClick={handleDecrement}>
                -
              </button>
              <p className="product-count">{count}</p>
              <button className="increment-button" onClick={handleIncrement}>
                +
              </button>
            </div>
            <h4 className="product-price">${product.price * count}</h4>
            <button className='big-button' onClick={addCar}>ADD TO CART</button>
          </div>
    
          {isModalVisible && (
            <div className="modal-background">
              <div className="modal-content">
                <h2>Car Added to Cart</h2>
                <p>{product.name} has been added to your cart.</p>
                <div className="button-container">
                  <button onClick={handleOk}>Continue shopping</button>
                  <button onClick={handleCancel}>Go to cart</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default ProductDisplay;