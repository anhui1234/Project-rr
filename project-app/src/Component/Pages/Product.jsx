import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useEffect, useState } from "react";

function Product() {
  const [allProduct,setProduct]=useState([]);
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
    const {productId}=useParams();
    // console.log("Product",productId);
    // console.log("Product",allProduct);
    const product=allProduct.find((e)=>e.id_Shop_Category===Number(productId));
    console.log("select Product",product);
    return (
      <div >
        {product ? (
      <ProductDetail product={product} />
    ) : (
      <div>Product not found</div>
    )}
      </div>
    );
  }
export default Product;