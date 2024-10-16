// SearchContext.js
import React, { createContext, useState, useEffect } from 'react';
import { books } from '../data.json'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const results = books.filter(book =>
                book.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(book => ({ id: book.id, name: book.name }));
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
        
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch, searchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
