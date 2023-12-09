import React, { createContext, useState } from 'react'
import  from '../Components/Assets/'

export const ShopContext = createContext(null);
const ShopContext = (props) => {
    const [cartItems, setCartItems] = useState(getDefaulCart());
    const contextValue ={, cartItems};

    console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
        {props.catalog}
    </ShopContext.Provider>
  )
}

export default ShopContext