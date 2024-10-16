import React, { createContext, useState } from 'react';
const BookContext = createContext();


const BookProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (id, quantity) => {
        const cartItemIndex = cart.findIndex(item => item.id === id);
        if (cartItemIndex !== -1) {
            const newCart = [...cart];
            newCart[cartItemIndex].quantity += quantity;
            setCart(newCart);
        } else {
            setCart([...cart, {id, quantity }]);
        }
        
    }
    const clearAllCart = () => {
        setCart([]); 
    };
    const updateTotalPrice = (total) =>{
        setTotalPrice(total);
    }
    const removeBook = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1); 
        setCart(newCart);
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => (item.id === id ? { ...item, quantity } : item))); 
    };
    return (
        <BookContext.Provider 
        value={{ cart, addToCart, clearAllCart, removeBook, updateQuantity, totalPrice, updateTotalPrice}}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider  };
