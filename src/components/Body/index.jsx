

import { books } from '../../../data.json';
import Book from '../Book';
import Category from '../Category';
import { useState, useContext, useEffect  } from 'react'
import "./style.css";
import NavBar from '../NavBar';
import { SearchContext } from '../../SearchContext';
const Body = () =>{
    // Xử lý trang
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIdx = currentPage * recordsPerPage;
    const firstIdx = lastIdx - recordsPerPage;

    const { searchResults } = useContext(SearchContext);

    const [filteredBooks, setFilteredBooks] = useState(books);

    const changePage = (index) =>{
        setCurrentPage(index)
    }

    const filterBookFromCategory = (list_id) => {
        setCurrentPage(1);
        setFilteredBooks(books.filter(book => list_id.some(id => book.id === id)));
    };
    useEffect(() => {
        if (searchResults.length > 0) {
            setFilteredBooks(searchResults.map(result => books.find(book => book.id === result.id)));
        } else {
            setFilteredBooks(books);
        }
        setCurrentPage(1);
    }, [searchResults]);
    
    const records = filteredBooks.slice(firstIdx, lastIdx);
    const nPage = Math.ceil(filteredBooks.length / recordsPerPage);
    const numbers = [...Array(nPage+1).keys()].slice(1);

    return(
        <div style={{ background: 'rgb(217, 219, 222)'}}>
            <div className="container">
                <NavBar/>
                <div className="row mt-2">
                    <div className="side col-sm-2 mt-1">
                        <Category filter={filterBookFromCategory} />
                    </div>
                    <div className='list-product col-12 col-sm-10'>
                        <div className="d-flex flex-wrap justify-content-start gap-2">
                            {records.map(book => <Book data={book} key={book.id} />)}
                        </div>
                        <nav className="mt-5 p-3" aria-label="page navigation">
                            <ul className='pagination justify-content-center text-dark gap-3'>
                                {
                                    numbers.map((page, idx) => (
                                        <li className={`page-item ${currentPage === page? 'active': ''}`}key={idx}>
                                            <a href='#' className='page-link rounded'
                                            onClick={()=> {
                                                changePage(page);
                                            }}>{page}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Body;