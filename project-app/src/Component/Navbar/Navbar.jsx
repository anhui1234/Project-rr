import './Navbar.css'
import React, { Component, useState } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu,setMenu]=useState("phone");
    return (
      <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Phone")}}><Link to="/phone" style={{textDecoration:'none'}}>Phone</Link>{menu==="Phone"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Laptop")}}><Link to="/laptop" style={{textDecoration:'none'}}>Laptop</Link>{menu==="Laptop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Tablet")}}><Link to="/tablet" style={{textDecoration:'none'}}>Tablet</Link>{menu==="Tablet"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Accessory")}}><Link to="/accessory" style={{textDecoration:'none'}}>Accessory</Link>{menu==="Accessory"?<hr/>:<></>}</li> 
        </ul>
        <div className="nav-login-cart">
          <Link to="/loginSignup"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt=''/></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
