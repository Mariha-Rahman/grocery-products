import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    //btn for cartbtn
    const handlebtn = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    //btn for remove
    const removeCart = () => {
        const newCart = []
        setCart(newCart)
    }
    //btn for choose
    const chooseOneProduct = (cart) => {
        const newCart = cart
        let array = []
        newCart.map(p => {
            const name = p.name;
            const newarr = [...array, name]
            const random = Math.random() * newarr.length
            console.log(random)
        })




    }
    return (
        <div className='shop'>
            <div className='items-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlebtn={handlebtn}
                    >

                    </Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    removeCart={removeCart}
                    chooseOneProduct={chooseOneProduct}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;