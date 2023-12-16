import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import LoginSignup from './Component/Pages/LoginSignup';
import Cart from './Component/Pages/Cart';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/maytinhbang" element={<ShopCategory category="maytinhbang"/>}/>
          <Route path="/laptop" element={<ShopCategory category="laptop"/>}/>
          <Route path="/dienthoai" element={<ShopCategory category="dienthoai"/>}/>
          <Route path="/phukien" element={<ShopCategory category="phukien"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path="/productId" element={<Product/>}/>
          </Route>
          <Route path="/loginSignup" element={<LoginSignup/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
