import React, { useContext, useState,useEffect  } from 'react';
import "./style.css"
import { Link, useLocation  } from 'react-router-dom';
import deleteImg from '../../assets/delete.png'
import { BookContext } from '../../BooksCart';
import { books } from '../../../data.json'

export const CartIcon = () => {

    const { cart } = useContext(BookContext);
    const size = 30;

    return (
        <div className='me-4 ms-4'>
            <Link to={'../../cart/'}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" 
                    width={size} height={size}
                    className="cart-icon"/>
                <span className='cart-count'>
                    {cart.length}
                </span>
            </div>
            </Link>
            {/* <button className='btn btn-primary mt-3' onClick={addToCart}>test</button> */}
        </div>
    );
};
export default CartIcon;

export const CartList = () =>{
    const { cart , clearAllCart, removeBook} = useContext(BookContext);

    const removeAllItems = () => {
        clearAllCart([]);
    }
    return (
        <div className='container mt-2'>
            <h4>Giỏ hàng</h4>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    <CartTable cartItems={cart} onRemoveAll={removeAllItems} removeBook={removeBook} />
                </div>
                <div className='col-12 col-md-3'>
                    <CalcPrice cart={cart}/>
                </div>
            </div>
        </div>
    );
}
const CalcPrice = () => {
    const { totalPrice } = useContext(BookContext);
    const tubikotinhyeu = () => {
        alert("Vui lòng đăng nhập")
    }
    return (
    <div className="card p-3 mt-2">
        <div className="d-flex justify-content-between mb-3">
            <div className="fs-5">Tạm tính</div>
            <div className="fw-bold fs-5">{totalPrice.toLocaleString()}<sup>₫</sup></div>
        </div>
        <hr/>
        <div className="d-flex justify-content-between mt-3">
            <div className="fs-5">Tổng tiền</div>
            <div className="fw-bold fs-4 text-danger">{totalPrice.toLocaleString()}<sup>₫</sup></div>
        </div>
        <div className="d-flex justify-content-end mb-3">
            <div>(Đã bao gồm VAT)</div>
        </div>
        <button className="btn btn-danger"
            onClick={tubikotinhyeu}>Mua hàng</button>
    </div>

    )
}

const CartTable = ({ cartItems, onRemoveAll, removeBook }) => {
    const {updateTotalPrice} = useContext(BookContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.selectedId) {
            setSelectedItems([location.state.selectedId]);
        }
    }, [location]);

    useEffect(() => {
        const totalPrice = selectedItems.reduce((total, id) => {
            const item = cartItems.find(i => i.id === id);
            if (!item) return total;
            const book = books.find(b => b.id === item.id);
            return total + (book ? book.current_seller.price * item.quantity : 0);
        }, 0);
        // alert(totalPrice)
        updateTotalPrice(totalPrice);
    }, [selectedItems, cartItems, books, updateTotalPrice]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(cartItems.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };
    const onRemoveBook = (index) => {
        removeBook(index);
    };
    return (
        <div className="p-2">
            <div className="card d-flex flex-row justify-content-between p-2 fw-bold">
                <div className='col-6'>
                    <div>
                        <input
                            class="form-check-input"
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectedItems.length === cartItems.length}
                        />
                        <span className='ms-3'>Tất cả</span>
                    </div>
                </div>

                <div className='col-6 d-flex justify-content-between text-center'>
                    <div className='col-3'>Đơn giá</div>
                    <div className='col-4'>Số lượng</div>
                    <div className='col-4'>Thành tiền</div>
                    <div className='col-1 d-flex justify-content-end'>
                        <img
                            src={deleteImg}
                            alt="Delete All"
                            onClick={onRemoveAll}
                            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                        />
                    </div>
                </div>
            </div>
            {cartItems.map((item, index) => (
                <CartItem
                    key={index}
                    index={index}
                    item={item}
                    onRemove={onRemoveBook}
                    isSelected={selectedItems.includes(item.id)}
                    onSelect={handleSelectItem}
                />
            ))}
        </div>
    );
};

const CartItem = ({ index, item, onRemove, isSelected, onSelect }) => {
    const book = books.find(book => book.id === item.id);
    const {updateQuantity} = useContext(BookContext);
    const increase_quantity = () => updateQuantity(item.id, item.quantity + 1);
    const decrease_quantity = () => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1);
    return (
        <div className='card mt-2 p-2'>
            <div className="d-flex justify-content-between align-item-center p-2">
                <div className='col-6'>
                    <div className='d-inline-flex align-item-center'>
                        <div className=''>
                            <input
                                class="form-check-input"
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => onSelect(item.id)}
                            />
                        </div>
                        <div className='ms-3'>
                            <img src={book.images[0].base_url}
                                width="80"
                                height="100"/>
                        </div>
                        <div className='ms-2'>
                            <img src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                width="90" height="20"/>    
                            <p className='ms-2 mt-1 me-1'>
                                {book.name.length > 40 ? book.name.slice(0, 40) + '...' : book.name}
                            </p>
                          
                        </div>
                    </div>
                    
                </div>
                <div className='col-6 pt-4 d-flex justify-content-between text-center'>
                    <div className='col-3'>
                        <p className='fw-bold'>
                            {book.current_seller.price.toLocaleString()}<sup>₫</sup>
                        </p></div>
                    <div className='col-4'>
                        <div className="d-flex mb-3 gap-1 justify-content-center flex-wrap">
                            <button className="col btn btn-outline-secondary" type="button" onClick={decrease_quantity}>-</button>
                            <button className="col rounded form btn-outline-secondary text-center ps-3 pe-3">{item.quantity}</button>
                            <button className="col btn btn-outline-secondary" type="button" onClick={increase_quantity}>+</button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <p className='fw-bold text-danger'>
                            {(book.current_seller.price * item.quantity).toLocaleString()}<sup>₫</sup>
                        </p></div>
                    <div className='col-1 d-flex justify-content-end'>
                        <img
                            src={deleteImg}
                            alt="Delete Item"
                            onClick={() => onRemove(index)}
                            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
