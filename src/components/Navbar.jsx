import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNav = (e) => {
        e.preventDefault();
        setIsNavActive(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <section id="header">
            <Link to="/"><img width="90px" height="55px" src="/imgs/img/logo.png" className="logo" alt="" /></Link>

            <div>
                <ul id="navbar" className={isNavActive ? 'active' : ''}>
                    <li><Link className={isActive('/')} to="/">Home</Link></li>
                    <li><Link className={isActive('/shop')} to="/shop">Shop</Link></li>
                    <li><Link className={isActive('/blog')} to="/blog">Blog</Link></li>
                    <li><Link className={isActive('/about')} to="/about">About</Link></li>
                    <li><Link className={isActive('/contact')} to="/contact">Contact</Link></li>
                    <li id="lg-bag"><Link className={isActive('/cart')} to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link></li>
                    <a href="#" id="close" onClick={closeNav}><i className="fa-solid fa-xmark"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link>
                <i id="bar" className="fas fa-outdent" onClick={toggleNav}></i>
            </div>
        </section>
    );
};

export default Navbar;
