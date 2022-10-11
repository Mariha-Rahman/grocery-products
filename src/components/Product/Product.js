import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { handlebtn } = props

    const { name, picture, price } = props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h3>Iteam Name:{name}</h3>
                <p>Price:{price}</p>
            </div>
            <button onClick={() => handlebtn(props.product)} className='cart-btn'>
                <p className='cart-info'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;