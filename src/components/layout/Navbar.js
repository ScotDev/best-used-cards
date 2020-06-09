import React from 'react';



function Navbar() {
    return (
        <nav className='navbar'>
            <input type='checkbox'></input>
            <div className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='menu'>
                <ul>
                    <li>
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
            </div>

        </nav>

    );
}

export default Navbar;