import './CSS/ShopCategory.css';
import dropdownIcon from '../Assets/dropdown.png';
const ShopCategory=(props)=>{
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

      </div>
      <div className='shopcategory-loadmore'>
        Eplore more
      </div>
    </div>
  )
}
export default ShopCategory;
