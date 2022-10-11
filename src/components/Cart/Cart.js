import React from 'react';
import './Cart.css'
const Cart = ({ cart, removeCart, chooseOneProduct }) => {
    // console.log(cart)
    return (
        <div>
            <h4>Selected Items:{cart.length}</h4>
            {
                cart.map(item => <p>Product Name:{item.name}</p>)
            }
            <div className='choose-btn'>
                <button onClick={() => chooseOneProduct(cart)} className='btn-1'>CHOOSE 1 FOR ME</button>
                <button onClick={removeCart} className='btn-2'>CHOOSE AGAIN</button>
            </div>

        </div>
    );
};

export default Cart;