import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

function Product() {
    const {productId}=useParams();
    const product=Number(productId);
    return (
      <div >
        <ProductDetail product={product}/>
        
      </div>
    );
  }
export default Product;