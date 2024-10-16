import { Link } from 'react-router-dom';
import StarRating from '../StarRating'
import Price from '../Price';
import './style.css'

const MAX_TITLE_LENGTH = 40;

function Book(props) {
    const nameBook = props.data.name.length > MAX_TITLE_LENGTH ? props.data.name.slice(0, MAX_TITLE_LENGTH) + '...' : props.data.name;
    const rating = props.data.rating_average
    const quantity_sold = props.data.quantity_sold ? props.data.quantity_sold.text: "";
    const price = props.data.current_seller.price
    const original_price = props.data.original_price

    const imageUrl = props.data.images[0].base_url

    return (
    <div className='book-item'>
    <Link to={'book/' + props.data.id} className="card text-decoration-none m-1" 
            style={{ width: 200, height:400}}>
                
        <img src={imageUrl} className="card-img-top" 
        style={{ maxWidth: '100%', maxHeight: '50%' }}/>
        <div className="card-body d-flex flex-column justify-content-between p-2">
            <div className="card-title mt-3">
                <p className="mb-0">{nameBook}</p>
                {quantity_sold !== "" && (
                    <div className='d-flex align-items-center' style={{ height: 20 }}>
                        <StarRating rating={rating}/>
                        <p className="small ms-2 mt-2 mb-1" style={{ fontSize: '0.7rem' }}>{quantity_sold}</p>
                    </div>
                )}
            </div>
            <div>
                <div className='price'>
                    <Price price={price} origin_price={original_price}/>
                </div>
                <hr className='mb-1'/>
                <p className='text-secondary text-center mt-1 mb-1'>Giao siêu tốc 2h</p>
            </div>
        </div>
    </Link>
    </div>
    )
}

export default Book;