
import "./ProductDetail.css"
import iphone15  from '../Assets/iphone15.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const ProductDetail=(props)=> {
    const {product}=props;
    return (
      <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={`http://localhost:8080/product/getimage/${product.image}`} alt=""/>
                <img src={`http://localhost:8080/product/getimage/${product.image}`} alt=""/>
                <img src={`http://localhost:8080/product/getimage/${product.image}`} alt=""/>
                <img src={`http://localhost:8080/product/getimage/${product.image}`} alt=""/>
            </div>
            <div className="productdisplay-img">
                 <img className="productdisplay-main-img" src={`http://localhost:8080/product/getimage/${product.image}`} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.shop_Name}</h2>
            <div className="productdisplay-right-star">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
            </div>
            <div className="productdisplay-right-price">
              {product.price}VNĐ
            </div>
            <div className="productdisplay-right-description">
              {product.description} 
            </div>
            <div className="productdisplay-right-color">
              <h2>Chọn phiên bản</h2>
              <div className="productdisplay-right-colors">
                <div>Red</div>
                <div>Black</div>
                <div>White</div>
              </div>
            </div>
            <button>Thêm vào giỏ hàng</button>
          {/* <p className="productdisplay-right-category"><span>Category:</span>Máy tính</p>
          <p className="productdisplay-right-category"><span>Phiên bản:</span>2024</p> */}
        </div>
      </div>
    );
  }
export default ProductDetail;