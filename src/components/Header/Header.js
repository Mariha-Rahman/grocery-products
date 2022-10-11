import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className='home'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/description">Description</a>
                <a href="/about">About</a>
            </div>
            <div>
                <a href="/sign">Sign in</a>
            </div>
        </nav>
    );
};

export default Header;