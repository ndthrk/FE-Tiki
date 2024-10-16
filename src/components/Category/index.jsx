import StarRating from "../StarRating";
import { books } from '../../../data.json';
import React, { useState, useEffect  } from 'react';
import './style.css'
const Category = ({filter}) => {
    // Lọc category
    const num_show = 5
    const categoriesBooks = books.reduce((acc, book) => {
        const name = book.categories.name;
        if (!acc[name]) {
            acc[name] = [];
        }
        acc[name].push(book.id);
        return acc;
    }, {});
    
    const showCgr = Object.entries(categoriesBooks)
        .slice(0, num_show)
        .map(([name, bookIds]) => ({ name, bookIds }));
    const sellers = books.reduce((acc,book) => {
        const name = book.current_seller.name
        if (!acc[name]){
            acc[name] = [];
        }
        acc[name].push(book.id);
        return acc;
    }, {})

    const showSellers = Object.entries(sellers)
        .slice(0, num_show)
        .map(([name, bookIds]) => ({ name, bookIds }));
    
    const [selectedSellers, setSelectedSellers] = useState([]);

    const checkChange = (seller) => {
        const sellerName = seller.name;
        const isChecked = !selectedSellers.includes(sellerName);
        const updatedSellers = isChecked
            ? [...selectedSellers, sellerName]
            : selectedSellers.filter(name => name !== sellerName);

        setSelectedSellers(updatedSellers);
    };

    useEffect(() => {
        let array = [];
        selectedSellers.forEach(name_seller => {
            array = [...array, ...sellers[name_seller]];
        });
        if (array.length > 0) filter(array);
    }, [selectedSellers, sellers, filter]);

    const filterStar = (star) =>{
        const filteredIds = books.filter(book => (book.rating_average || 0) >= star)
                                .map(book => book.id);
        filter(filteredIds)
    }
    return(
            <div className="card p-3 bg-white small d-sm-block d-none">
                <div className="category">
                    <h6>Danh mục sản phẩm</h6>
                    <ul className="list-unstyled">
                        {showCgr.map((category, index) => (
                            <li key={index}>
                                <a href="#" 
                                    onClick={() => filter(category.bookIds)}>
                                    {category.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="supplier">
                    <h6>Nhà cung cấp</h6>
                    <ul className="list-unstyled">
                        {showSellers.map((seller, index) => (
                            <li class="form-check" key={index}>
                                <input class="form-check-input" type="checkbox"
                                    onChange={() => checkChange(seller)}
                                />
                                <label class="form-check-label">{seller.name}</label>
                            </li>
                        ))}
                        <li><a class="nav-link dropdown-toggle text-primary" href="#">
                            Xem thêm</a></li>
                    </ul>
                </div>
                <div className='rating'>
                    <h6>Đánh giá</h6>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#" className="d-flex"
                                onClick={() => filterStar(5)}>
                                <StarRating rating={5}/>
                                <p className="small ms-2 mt-1 mb-0">từ 5 sao</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex"
                                onClick={() => filterStar(4)}>
                                <StarRating rating={4}/>
                                <p className="small ms-2 mt-1 mb-0">từ 4 sao</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex"
                                onClick={() => filterStar(3)}>
                                <StarRating rating={3}/>
                                <p className="small ms-2 mt-1 mb-0">từ 3 sao</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default Category;
