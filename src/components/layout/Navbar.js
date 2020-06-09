import React from 'react';

import brand_logo from '../../img/logo512.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <input type='checkbox'></input>
            <div className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul>
                <li>
                    <img src={brand_logo} alt='brand logo'></img>
                    <p>Best Used Cars</p>
                </li>
                <li>
                    <a href="#">New deals</a>
                </li>
                <li>
                    <a href="#">Limited offers</a>
                </li>
                <li>
                    <a href="#">Sale</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>


        </nav>

    );
}

export default Navbar;