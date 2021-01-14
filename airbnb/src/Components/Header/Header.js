import React from 'react'
import Nav from './Nav/Nav';
import Search from './Search/Search'
import './Header.css';

function Header() {
    return (
        <div className="header">
            <Nav />
            <Search />
        </div>
    )
}

export default Header
