
import './style.css'
import {CartIcon} from '../Cart'
import SearchBar from '../SearchBar'
import backimg from '../../assets/back.png'
import menuimg from '../../assets/menu.png'
import { useNavigate } from 'react-router-dom';

function Header() {
    const handleSearch = (searchTerm) => {
        setCurrentPage(1);
        const filteredBySearch = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filteredBySearch);
    };
    const nav = useNavigate();
    const goHome = () => {
        nav('/')
    }
    return (
    <div>
        <div className='d-sm-block d-none bg-white p-2'>
            <div class="header d-flex justify-content-between align-items-center">
                <div className='col d-flex align-items-center me-4'>
                    <div className='logo ms-5 me-5 d-flex flex-column align-items-center'
                        onClick={goHome}>
                        <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" alt="tiki-logo" width="96" height="40"/>
                        <p className='text-center fw-bold text-primary mb-0'>Tốt & Nhanh</p>
                    </div>
                    <SearchBar onSearch={handleSearch}/>
                </div>
                <div className='user d-flex align-items-center gap-2'>
                    <button className='home btn btn-outline-white home d-flex align-items-center'>
                        <img src='https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png'
                            width="32" height="32"/>
                        <a href='#' className='ms-1 text-reset text-decoration-none'
                                onClick={goHome}>Trang chủ</a>
                    </button>
                    <button className='account home btn btn-outline-white d-flex align-items-center'>
                        <img src='https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png'
                            width="32" height="32"/>
                        <a href='#' className='ms-2 text-reset text-decoration-none'>Tài khoản</a>
                    </button>
                    <div className='cart'>
                        <CartIcon/>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-sm-none d-block bg-primary'>
            <div class="d-flex justify-content-between align-items-center p-3 mb-0">
                <div className='d-flex align-items-center gap-4 me-4'>
                    <div className='back'>
                        <a href='#'><img src={backimg}
                            width="22" height="22"/></a>
                    </div>
                    <div className='menu'>
                        <a href='#'><img src={menuimg}
                            width="22" height="22"/></a>
                    </div>
                </div>
                <SearchBar/>
                <CartIcon/>
            </div>
                        
        </div>
    </div>
    )
}
export default Header