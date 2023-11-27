import { useState } from "react";
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShopCategory from "./Component/Pages/ShopCategory";
import Product from "./Component/Pages/Product";
import Cart from "./Component/Pages/Cart";
import LoginSignup from "./Component/Pages/LoginSignup";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/phone" element={<ShopCategory category="Phone"/>}/>
        <Route path="/laptop" element={<ShopCategory category="Latop"/>}/>
        <Route path="/tablet" element={<ShopCategory category="Tablet"/>}/>
        <Route path="/accessory" element={<ShopCategory category="Accessory"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/loginSignup" element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
