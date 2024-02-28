import './CSS/ShopCategory.css';
import dropdownIcon from '../Assets/dropdown.png';
import iphone15 from "../Assets/iphone15.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Delete } from '@mui/icons-material';
import Delete from './Delete';
import { ToastContainer, toast } from "react-toastify";
const ShopCategory=(props)=>{
  const [products,setProduct]=useState([]);
  // console.log(products);
  
  const handleDelete = async (productId) => {
    try {
      await fetch(`http://localhost:8080/product/delete/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Các headers khác nếu cần
        },
      });

      // Cập nhật danh sách sản phẩm sau khi xóa thành công
      const updatedProducts = products.filter(product => product.id_Shop_Category !== productId);
      setProduct(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async ()=>{
    try {
      const response=await fetch(`http://localhost:8080/product`);
      if(response.ok){
        const productData=await response.json();
        setProduct(productData);
       
      }else{
        console.error("fail to data")
      }
    } catch (error) {
      console.error('eror data',error);
    }
  }
  
  return(
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdownIcon} style={{width:'25px',height:'15px'}} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {
          products.map((product,idm)=>{
            if(product.category.id_Category===Number(props.category)){
              return (

              <div className='product' key={idm}>
                <div className='box'>
                  <img src={`http://localhost:8080/product/getimage/${product.image}`} alt={product.image}/>
                  <div className='icon-product'>
                      <li><FavoriteBorderIcon/></li>
                      <Link to={`/product/${product.id_Shop_Category}`}><li><VisibilityIcon/></li></Link>
                      <li><AddShoppingCartIcon/></li>
                  </div>
                </div>
                <div className='infor'>
                    <h3>{product.shop_Name}</h3>
                    <p>{product.price}</p>
                </div>
                <Delete productId={product.id_Shop_Category} onDelete={() => handleDelete(product.id_Shop_Category)}/>
                <ToastContainer />
              </div>
              )
            }else{
              return null;
            }
          })
        }
       
        
      </div>
      
      <div className='shopcategory-loadmore'>
        Eplore more
      </div>
    </div>
  )
}
export default ShopCategory;
