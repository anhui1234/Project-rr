import './Header.css';
import logo from '../Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import shoppingCart from '../Assets/cart.png'
import { Link } from 'react-router-dom';
function Header() {
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
        <Link to='/loginSignup'><button>Login</button></Link>
        <Link to='/cart'><img src={shoppingCart} alt=''/></Link>
        <div className="header-cart-count">0</div>
      </div>
    </div>
  );
}

export default Header;