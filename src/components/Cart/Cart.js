
import Item from '../Item/Item';
import './Cart.css'
const Cart = (props) => {

    const { cart, removeCart, chooseOneProduct } = props
    // console.log(cart)
    return (
        <div>
            <h4>Selected Items:{cart.length}</h4>
            {cart.map(item => <Item

                item={item}
            >
            </Item>)}
            <div className='choose-btn'>
                <button onClick={() => chooseOneProduct(cart)} className='btn-1'>CHOOSE 1 FOR ME</button>

                <button onClick={removeCart} className='btn-2'>CHOOSE AGAIN</button>
            </div>

        </div>
    );
};

export default Cart;