import { books } from '../../../data.json'
import ImageShow from '../ImageShow'
import './style.css'
import Description from '../Description'
import StarRating from '../StarRating'
import Price from '../Price'
import React, { useContext, useState } from 'react';
import { BookContext } from '../../BooksCart';
import { useNavigate } from 'react-router-dom';
const Detail = ({id}) => {
    const book = books.find(item => item.id == id)

    const filteredImages = book.images.filter(image => image.base_url.startsWith('https'));
    const images = filteredImages.map(image => ({
        original: image.base_url,
        thumbnail: image.thumbnail_url,
        originalHeight: 300,
        originalWidth:120,
        thumbnailHeight:80,
        thumbnailWidth:20
      }));

    return(
        <div style={{ background: 'rgb(217, 219, 222)'}}>
            <div className="container pt-4 pb-3">
                <div className='row d-flex flex-wrap justify-content-between gx-2'>
                    <div className='col-12 col-md-3 mb-2 order-1'>
                        <ImageShow images={images}/>    
                    </div>
                    <div className='col-12 col-md-6 mb-2 order-3 order-md-2'>
                        <div className='mb-2'>
                            <MainInfo book={book}/>
                        </div>
                        <Description description={book.description}/>
                    </div>
                    <div className='col-12 col-md-3 mb-2 order-2 order-md-3'>
                        <Cart id={id} price={book.current_seller.price}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Cart = ({ id, price }) => {    
    const { addToCart } = useContext(BookContext);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const increase_quantity = () => setQuantity(quantity + 1);
    const decrease_quantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    
    const addCart = () => {
        addToCart(id, quantity);
        alert("Đã thêm sản phẩm vào giỏ hàng!");
    };
    const buyNow = () =>{  
        addToCart(id, quantity);
        navigate('../../cart/', { state: { selectedId: id } })
    }
    return (
        <div className="card p-2">
            <div className="card-body">
                <h5 className="card-title">Số lượng</h5>
                <div className="d-flex mb-3 gap-1 justify-content-start">
                    <button className="btn btn-outline-secondary" type="button" onClick={decrease_quantity}>-</button>
                    <button className="rounded form btn-outline-secondary text-center ps-3 pe-3">{quantity}</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={increase_quantity}>+</button>
                </div>
                <h5 className="card-title ">Tạm tính</h5>
                <h3 className="card-text fw-bold">{(price * quantity).toLocaleString()}<sup>₫</sup></h3>
                <div className="d-flex flex-column gap-2">
                    <button className="btn btn-danger" type="button"
                        onClick={buyNow}>Mua ngay</button>
                    <button className="btn btn-outline-primary" type="button"
                        onClick={addCart}>Thêm vào giỏ hàng</button>
                    <button className="btn btn-outline-primary" type="button">Mua trước trả sau</button>
                </div>
                
            </div>
        </div>
    );
}

const MainInfo = ({book}) => {
    const authurs = book.authors? book.authors: [];
    const quantity_sold = book.quantity_sold ? book.quantity_sold.text: "";
    const rating = book.rating_average? book.rating_average:0;
    const bookName = book.name;
    const price = book.current_seller.price
    const original_price = book.original_price
    const specifications = book.specifications? book.specifications[0].attributes: [];

    return (
        <div className='card card-body p-3 bg-white'>
            <div className='part-1'>
                <div className='d-inline-flex gap-1 align-items-center'>
                    <img src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                    width="90" height="20"/>
                    Tác giả:
                    {authurs && (
                    authurs.map(author => (
                        <span><a href='#' className='text-primary'>{author.name}</a></span>
                    )))}
                </div>
                <h4>{bookName}</h4>
                <div className='d-flex gap-1 align-items-center text-secondary'>
                    <p className='text-dark fw-bold'>{rating} </p>
                    <span className='pb-3'><StarRating rating={rating}/></span>
                    <p>(928)</p>
                    <p>| {quantity_sold}</p>
                </div>
                <div >
                    <Price price={price} origin_price={original_price} small={false}/>
                </div>
            </div>
            <div className='part-2 mt-4'>
                <h4>Thông tin chi tiết</h4>
                <table className="table">
                    <tbody>
                    {specifications.map(attribute => (
                        <tr>
                            <td className='text-secondary'>{attribute.name}</td>
                            <td>{attribute.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Detail;