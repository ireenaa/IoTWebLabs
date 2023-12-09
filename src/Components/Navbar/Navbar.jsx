import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/cart_icon.png'


export const Navbar = () => {
    const [menu,setMenu] = useState("home")


  return (
    <div className='navbar'>
        <div className="nav-logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}} ><Link style={{textDecoration:'none', color: 'black'}}to='/'> Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("catalog")}} ><Link style={{textDecoration:'none', color: 'black'}} to='/catalog'>Catalog</Link>{menu==="catalog"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            {/* <div className="nav-cart-count">0</div> */}
        </div>


    </div>
  )
}
