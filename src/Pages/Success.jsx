import React from 'react';
import '../Pages/CSS/Success.css'
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='success-sector'>
      
        <h1>Success!</h1>
        <p>Your order was sent to processing</p>
        <p>Check your email box for future information</p>
        <Link to="/cart">
        <button>Go back to Catalog</button>
        </Link>
      </div>
    
  );
};

export default Success;
