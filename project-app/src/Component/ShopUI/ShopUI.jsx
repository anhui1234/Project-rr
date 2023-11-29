import Iphone from "../Assets/iphone1.png"
import Macbook from  "../Assets/macbook1.png"

import Airpot from "../Assets/airpot1.png"
import "./ShopUI.css"
function ShopUI() {
    
    return (
      <div className="shop">
           <div className="shop-left">
              <h2>New Products</h2>
              <div className="shop-hand-icon">
                <p>For Everyone</p>
              </div>
           </div>
           <div className="shop-right">
               <div className="shop-right-iphone">
                  <img src={Iphone} alt=""/>
               </div>
               <div className="shop-right-macbook">
                  <img src={Macbook} alt=""/>
               </div>
               
                <div className="shop-right-airpot">
                  <img src={Airpot} alt="" />
                </div>
                
           </div>
      </div>
    );
  }
  
  export default ShopUI;