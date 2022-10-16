import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/Fackdb';

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

    useEffect(() => {
        const storedOrder = getStoredCart();
        let savedOrdere = []
        for (const name in storedOrder) {
            const addedProduct = products.find(product => product.name === name)
            if (addedProduct) {
                savedOrdere.push(addedProduct)
            }
        }
        setCart(savedOrdere)
    }, [products])
    // btn for cartbtn
    const handlebtn = (product) => {
        console.log(product.id)
        let newCart = []
        if (product in newCart) {
            setCart(newCart)
        }
        else {
            newCart = [...cart, product]
            setCart(newCart)
        }
        addToDb(product.name)
    }
    const chooseOneProduct = (cart) => {
        let newCart = []
        for (const item of cart) {
            newCart = [...newCart, item.name]
        }
        const randomProduct = Math.floor(Math.random() * newCart.length)
        const oneProduct = newCart[randomProduct]
        console.log(oneProduct);
    }
    //btn for remove
    const removeCart = () => {
        const newCart = []
        setCart(newCart)
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