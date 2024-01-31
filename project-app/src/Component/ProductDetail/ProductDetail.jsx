
import "./ProductDetail.css"
import iphone15  from '../Assets/iphone15.jpg'
const ProductDetail=()=> {
    
    return (
      <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={iphone15} alt=""/>
                <img src={iphone15} alt=""/>
                <img src={iphone15} alt=""/>
                <img src={iphone15} alt=""/>
                
            </div>
            <div className="productdisplay-img">
                 <img className="productdisplay-main-img" src={iphone15} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>Hàng mới về</h1>
        </div>
      </div>
    );
  }
export default ProductDetail;