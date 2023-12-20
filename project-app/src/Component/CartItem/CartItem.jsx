import React, { Component } from 'react';
import './CartItem.css'
import { Delete } from '@mui/icons-material';
import macbook from "../Assets/macbook.jpg"
class CartItem extends Component {
    render() {
        return (
            <div className='cartItems'>
                <div className='cartitems-format-main'>
                    <p>Sản phẩm</p>
                    <p>Tên sản phẩm</p>
                    <p>Loại</p>
                    <p>Giá</p>
                    <p>Số lượng</p>
                    <p>Tổng cộng</p>
                    <p>Xóa</p>
                </div>
                <hr/>
                <div>
                    <div className='cartitems-format'>
                        <img src={macbook} alt='' className='carticon-product-icon'/>
                        <p>Macbook Air 2023</p>
                        <p>Laptop</p>
                        <p>$599</p>
                        <button className='cartitems-quantity'>1</button>
                        <p>$599</p>
                        <Delete className='cartItem-remove-icon' />
                    </div>
                    <hr/>
                </div>
                <div className='cartitems-down'>
                    <div className='cartitems-total'>
                        <h1>Thông tin đơn hàng</h1>
                        <div>
                            <div className='cartitems-total-item'>
                                <p>Phụ Phí</p>
                                <p>0</p>
                                
                            </div>
                            <hr/>
                            <div className='cartitems-total-item'>
                                <p>Miễn phí giao hàng</p>
                            </div>
                            <hr/>
                            <div className='cartitems-total-item'>
                                <h3>Tổng</h3>
                                <h3>$599</h3>
                            </div>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
