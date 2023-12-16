import React from 'react';
import './ItemNb.css'
import iphone15 from "../Assets/iphone15.jpg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import macbook from "../Assets/macbook.jpg"
import airpod from "../Assets/airpods.jpg"
import appleWatch from "../Assets/appleWatch.jpg"
function ItemNb() {
    
      return (
        <div className='ItemNb'>
            <div>
              <img src={iphone15} alt=''/>
              <h3>Iphone 15 Promax</h3>
              <p>Iphone 15 với những cải tiến so với thế hệ tiền nhiệm
                như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c
              </p>
              <li className=''>Mua ngay <KeyboardArrowRightIcon style={{fontSize:'medium'}}/></li>
            </div>
            <div>
              <img src={macbook} alt=''/>
              <h3>Macbook Air 2023</h3>
              <p>Iphone 15 với những cải tiến so với thế hệ tiền nhiệm
                như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c
              </p>
              <li className=''>Mua ngay <KeyboardArrowRightIcon style={{fontSize:'medium'}}/></li>
            </div>
            <div>
              <img src={airpod} alt=''/>
              <h3>Airpod Pro 2023</h3>
              <p>Iphone 15 với những cải tiến so với thế hệ tiền nhiệm
                như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c
              </p>
              <li className=''>Mua ngay <KeyboardArrowRightIcon style={{fontSize:'medium'}}/></li>
            </div>
            <div>
              <img src={appleWatch} alt=''/>
              <h3>Apple Watch SE 2023</h3>
              <p>Iphone 15 với những cải tiến so với thế hệ tiền nhiệm
                như: Nút gạt thay bằng bấm, cổng Lightning thay bằng USB type-c
              </p>
              <li className=''>Mua ngay <KeyboardArrowRightIcon style={{fontSize:'medium'}}/></li>
            </div>
        </div>
      );
    }
    
    export default ItemNb;