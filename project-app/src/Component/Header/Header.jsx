import './Header.css';
import logo from '../Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import shoppingCart from '../Assets/cart.png'
import { Link } from 'react-router-dom';
import {  useState } from 'react';

const  Header =({isLoggedIn, setLoggedInUser,user}) =>{
  const [cartCount, setCartCount] = useState(0);
  // const [isLoggedIn, setLoggedIn] = useState(false);
 
  const handleLogout=()=>{
    localStorage.removeItem("token");
    setLoggedInUser(false);
  };
//  console.log(user);
  // console.log(isLoggedIn);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt=''/>
        <p>QH</p>
      </div>
      <form>
          <input type='text' placeholder='Bạn muốn tìm sản phẩm gì?'/>
          <button><SearchIcon/></button>
      </form>
      <div className="header-login-cart"> 
      {isLoggedIn===true ? (<div>Welcome,{user}<button onClick={handleLogout}>logout</button></div>):(<Link to='/loginSignup' ><button >Login</button></Link> ) }
       
       <Link to='/cart'><img src={shoppingCart} alt=''/></Link>
        
        <div className="header-cart-count">{cartCount}</div>
      </div>
    </div>
  );
}

export default Header;