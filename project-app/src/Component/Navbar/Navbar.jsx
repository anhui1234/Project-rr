import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const [menu,setMenu]=useState("trangchu")
    return (
      <div className="Navbar">
          <ul className='Navbar-menu'>
            <li className={menu==="trangchu"?'gred':''} onClick={()=>{setMenu("trangchu")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/'>Trang chủ</Link></li>
            <li className={menu==="maytinhbang"?'gred':''} onClick={()=>{setMenu("maytinhbang")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/maytinhbang'>Máy tính bảng</Link></li>
            <li className={menu==="laptop"?'gred':''} onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/laptop'>Laptop</Link> </li>
            <li className={menu==="dienthoai"?'gred':''} onClick={()=>{setMenu("dienthoai")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/dienthoai'>Điện thoại</Link></li>
            <li className={menu==="phukien"?'gred':''} onClick={()=>{setMenu("phukien")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/phukien'>Phụ kiện</Link> </li>
          </ul>
      </div>
    );
  }
  
  export default Navbar;