import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import LoginSignup from './Component/Pages/LoginSignup';
import Cart from './Component/Pages/Cart';
import Footer from './Component/Footer/Footer';
import phone_banner from './Component/Assets/dienthoai.png';
import laptop_banner from './Component/Assets/macbook.png';
import tablet_banner from './Component/Assets/maytinhbang.png';
import accessory_banner from './Component/Assets/phukien.png';
import { useEffect, useState } from 'react';
import ProductDetail from './Component/ProductDetail/ProductDetail';
const App=()=> {
  // const  [category,setCategory]=useState();
  const [isLoggedIn, setLoggedInUser] = useState(false);
  const [user,setUser]=useState(null);
  

  const handleLogin = (user) => {
    // Xử lý thông tin đăng nhập và cập nhật loggedInUser
    setLoggedInUser(true);
    setUser(user);
  };

  return (
    <div >
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setLoggedInUser={setLoggedInUser} user={user}/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop user={user}/>}/>
          <Route  path="/maytinhbang" element={<ShopCategory banner={tablet_banner} category="2"/>}/>
          <Route   path="/laptop" element={<ShopCategory banner={laptop_banner} category="1"/>}/>
          <Route  path="/dienthoai" element={<ShopCategory banner={phone_banner} category="3"/>}/>
          <Route  path="/phukien" element={<ShopCategory banner={accessory_banner} category="4"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/loginSignup" element={<LoginSignup onLogin={handleLogin} />} />
          
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
