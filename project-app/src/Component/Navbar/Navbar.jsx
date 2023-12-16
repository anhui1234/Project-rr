import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const [menu,setMenu]=useState("trangchu")
    return (
      <div className="Navbar">
          <ul className='Navbar-menu'>
            <li onClick={()=>{setMenu("trangchu")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/'>Trang chủ</Link>{menu==="trangchu"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("maytinhbang")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/maytinhbang'>Máy tính bảng</Link>{menu==="maytinhbang"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/laptop'>Laptop</Link> {menu==="laptop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("dienthoai")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/dienthoai'>Điện thoại</Link>{menu==="dienthoai"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("phukien")}}><Link style={{textDecoration:'none',color:'#E0FFFF'}} to='/phukien'>Phụ kiện</Link> {menu==="phukien"?<hr/>:<></>}</li>
          </ul>
      </div>
    );
  }
  
  export default Navbar;