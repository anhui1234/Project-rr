import './Advertisement.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Advertisement() {
    
    return (
      <div className="Advertisement">
        <h2>Deal hời</h2>
        <p>Sản phẩm mới luôn được cập nhật</p>
        <li className='btn'>Shop now<KeyboardDoubleArrowRightIcon style={{fontSize:'medium',top:'30px'}}/></li>
      </div>
    );
  }
export default Advertisement;