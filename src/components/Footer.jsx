import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src="/imgs/img/footer_logo.png" alt="" />
                <h4>Contact</h4>
                <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone:</strong> +91 22 2253 6535 /(+91) 01 2345 6789</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <Link to="/about">About Us</Link>
                <Link to="#">Delivery Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms and Conditions</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="col">
                <h4>Account</h4>
                <Link to="#">Sign In</Link>
                <Link to="/cart">View Cart</Link>
                <Link to="#">My Wishlist</Link>
                <Link to="#">Track My Order</Link>
                <Link to="#">Help</Link>
            </div>
            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="/imgs/img/App_Store.png" alt="" />
                    <img src="/imgs/img/google_play.png" alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <div>
                    <img src="/imgs/img/visa.svg" alt="" />
                    <img src="/imgs/img/mastercard.png" alt="" />
                    <img src="/imgs/img/Maestro.png" alt="" />
                    <img src="/imgs/img/American_Express.png" alt="" />
                </div>
            </div>
            <div className="copyright">
                <p>© 2025, Tech2 etc - HTML CSS Ecommerce Template</p>
            </div>
        </footer>
    );
};

export default Footer;
