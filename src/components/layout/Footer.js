import React from 'react'

export default function Footer() {
    const weekdayTimes = '09:00 - 18:00';
    const saturdayTimes = '09:00 - 17:00';
    const sundayTimes = '10:00 - 16:00';
    return (
        <div className="footer">
            <ul>
                <li className="footer-title">Opening Hours</li>
                <li>
                    <p>Monday: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Tuesday: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Wednesday: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Thursday: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Friday: {weekdayTimes}</p>
                </li>
                <li>
                    <p>Saturday: {saturdayTimes}</p>
                </li>
                <li>
                    <p>Sunday: {sundayTimes}</p>
                </li>
            </ul>
            <ul>
                <li className="footer-title">Contact Us</li>
                <li>
                    <a href="#"><i class="ri-phone-line"></i> +4478985642245</a>
                </li>
                <li>
                    <a href="#"><i class="ri-mail-send-line"></i> info@best-used-cars.com</a>
                </li>
                <li>
                    <a href="#"><i class="ri-facebook-circle-line"></i> Facebook</a>
                </li>
                <li>
                    <a href="#"><i class="ri-twitter-line"></i> Twitter</a>
                </li>
                <li>
                    <a href="#"><i class="ri-map-pin-line"></i> Find us</a>
                </li>
            </ul>
            <ul>
                <li className="footer-title">Best Used Cars</li>
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
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div >

    )
}
