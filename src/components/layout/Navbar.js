import React from 'react';

import brand_logo from '../../img/logo512.png'

function Navbar() {

    // onClick = () => {
    //     const menu = document.getElementByClassName('mobile-nav-links');
    //     menu.style.display = 'flex';
    // }

    return (
        <nav className='navbar'>

            <img src={brand_logo} alt='brand logo'></img>
            <p>Best Used Cars</p>

            <ul className="desktop-menu-links">
                <li>
                    <a href="#">New arrivals</a>
                </li>
                <li>
                    <a href="#">Limited offers</a>
                </li>
                <li>
                    <a href="#">Sale</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/ccj44Kx6vKnJCMQ2A">Find us</a>
                </li>
                <li>
                    <a href="#footer">Contact us</a>
                </li>
            </ul>

            <div className='hamburger'>
                <input type='checkbox'></input>
                <div></div>
                <div></div>
                <div></div>

                <ul id="mobile-menu">
                    <li>
                        <a href="#">New arrivals</a>
                    </li>
                    <li>
                        <a href="#">Limited offers</a>
                    </li>
                    <li>
                        <a href="#">Sale</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="https://goo.gl/maps/ccj44Kx6vKnJCMQ2A">Find us</a>
                    </li>
                    <li>
                        <a href="#footer">Contact us</a>
                    </li>
                </ul>
            </div>

        </nav>

    );
}

export default Navbar;