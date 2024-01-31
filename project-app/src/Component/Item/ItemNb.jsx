import React, { useEffect, useState } from 'react';
import './ItemNb.css'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useParams } from 'react-router-dom';

function ItemNb() {
      const [images,setImage]=useState([]);
      // const {productId}=useParams();
      // const product=images.find((e)=>e.id_Shop_Category===Number(productId));
      useEffect(()=> {
        fetchData();
      },[]);
      const fetchData=async ()=>{
        try{
          const response=await fetch(`http://localhost:8080/product/nb`);
          
            if(response.ok){
              const productData=await response.json();
              setImage(productData);
            }else{
              console.error("fail to data")
            }
          
        }catch(error){
          console.error('eror data',error);
        }
      }
      return (
        <>
          <div className='ItemNb'>
          {
            images.map(image=>(
              <div key={image.id_Shop_Category}>
              <Link to={`/product/${image.id_Shop_Category}`}><img src={`http://localhost:8080/product/getimage/${image.image}`} alt={image.image}/></Link>
              <h3>{image.shop_Name}</h3>
              <p>
                {image.description}
              </p>
              <li className=''>Mua ngay <KeyboardArrowRightIcon style={{fontSize:'medium'}}/></li>
            </div> 
            ))
          
          }
           
        </div>
        </>
      );
    }
    
    export default ItemNb;