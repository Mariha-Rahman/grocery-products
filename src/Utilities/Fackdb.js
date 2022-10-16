const addToDb = (id) => {
    let shopingcart = {};

    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shopingcart = JSON.parse(storedCart)
    }

    const quantity = shopingcart[id]
    if (quantity) {
        const newquantity = quantity + 1
        shopingcart[id] = newquantity
    }
    else {
        shopingcart[id] = 1;
    }
    localStorage.setItem('Shopping-cart', JSON.stringify(shopingcart))
};
const getStoredCart = () => {
    let shopingcart = {}
    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shopingcart = JSON.parse(storedCart)
    }
    return shopingcart
}
export {
    addToDb,
    getStoredCart
}