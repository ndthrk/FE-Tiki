import React, { useContext, useState } from 'react';
import { SearchContext } from '../../SearchContext';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SearchBar = () => {
    const { searchTerm, handleSearch, searchResults } = useContext(SearchContext);
    const [input, setInput] = useState(searchTerm);  
    const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInput(e.target.value);
        handleSearch(e.target.value);
        setSuggestionsVisible(true);
    };

    const handleSuggestionClick = (suggestion) => {
        handleSearch(suggestion.name);
        setInput(suggestion.name);  
        setSuggestionsVisible(false);
    };

    const handleBlur = () => {
        setTimeout(() => setSuggestionsVisible(false), 100);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(input);
            navigate('/'); 
        }
    };

    return (
        <div className="search-bar flex-grow-1 position-relative">
            <div className="form d-flex align-items-center">
                <i className="icon-search ms-3">
                    <img src='https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png'
                        width="20" height="20" alt="search-icon" />
                </i>
                <input 
                    type="text" 
                    className="form-control form-input" 
                    placeholder="Bạn đang tìm kiếm gì"
                    value={input}  
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={() => setSuggestionsVisible(true)}
                    onKeyDown={handleKeyDown}
                />
                <span className="d-sm-block d-none">
                    <button 
                        className='ms-2 btn btn-link p-1 text-primary text-decoration-none'
                        onClick={() => {
                            handleSearch(input);
                            setInput(''); 
                            navigate('/'); 
                        }}
                    >
                        Tìm kiếm
                    </button>
                </span>
            </div>
            {isSuggestionsVisible && searchResults.length > 0 && (
                <ul className="suggestions-list position-absolute w-100 bg-white border mt-2">
                    {searchResults.slice(0, 5).map((result) => (
                        <li key={result.id} className="suggestion-item p-2" 
                            onClick={() => handleSuggestionClick(result)}>
                            {result.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
