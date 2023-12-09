// import React, { useContext } from 'react'
// import '../CartItems/CartItems.css'
// import remove_icon from '../Assets/cart_cross_icon.png'
// import  from '../Assets/'

// export const CartItems = () => {
//     // const {, CartItems, removeFromCart} = useContext(ShopContext);
//   return (
//     <div className='cartitems'>
//         <div className='cartitems-format-main'>
//             <h1>Shopping Cart</h1>
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//         </div>
//         <hr />
//         {.map((e)=>{
//             if(cartItems[e.id]>0)
//             {
//                 return <div>
//                 <div className="cartitems-format">
//                     <img src={e.image} alt="" className='carticon-product-icon' />
//                     <p>{e.name}</p>
//                     <p>${e.price}</p>
//                     <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                     <p>{e.price*cartItems[e.id]}</p>
//                     <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
//                 </div>
//                 <hr />
//             </div>
//             }
//         })}
//     </div>
//   )
// }
