import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopProduct = () => {
    const [mainImgSrc, setMainImgSrc] = useState('/imgs/img/shop_product1.jpg');

    const handleImgClick = (src) => {
        setMainImgSrc(src);
    };

    return (
        <>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImgSrc} width="100%" id="MainImg" alt="" />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img 
                                src="/imgs/img/shop_product1.jpg" 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => handleImgClick('/imgs/img/shop_product1.jpg')}
                            />
                        </div>
                        <div className="small-img-col">
                            <img 
                                src="/imgs/img/s_product1a.webp" 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => handleImgClick('/imgs/img/s_product1a.webp')}
                            />
                        </div>
                        <div className="small-img-col">
                            <img 
                                src="/imgs/img/s_product1b.webp" 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => handleImgClick('/imgs/img/s_product1b.webp')}
                            />
                        </div>
                        <div className="small-img-col">
                            <img 
                                src="/imgs/img/s_product1c.webp" 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => handleImgClick('/imgs/img/s_product1c.webp')}
                            />
                        </div>
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Home / Hoodie</h6>
                    <h4>Men's Fashion Hoodie</h4>
                    <h2>$15</h2>
                    <select defaultValue="Select Size">
                        <option disabled>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <input type="number" defaultValue="1" />
                    <button className="normal">Add to Cart</button>
                    <h4>Product Details</h4>
                    <span>SPU:BKPR21714<br />
                        Fabric Name: 100%Polyester<br />
                        Process: Printed<br />
                        Style: Fashion<br />
                        Length: Regular<br />
                        Collar: Hoodie Collar<br />
                        Sleeve Type: Long Sleeve<br />
                        Occasion: Daily<br />
                        Theme: All Season</span>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Your World, Customized – From Wearables to Décor, Tech to Treasures.</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="/imgs/img/shop_product4.jpg" alt="" />
                        <div className="des">
                            <span>Shop Ghumakkad</span>
                            <h5>T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$15</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/shop_product7.jpg" alt="" />
                        <div className="des">
                            <span>cindaa06</span>
                            <h5>Summer Plus Size T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$15</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/shop_product10.jpg" alt="" />
                        <div className="des">
                            <span>PatPat</span>
                            <h5>Kids Clothing</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$12</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/shop_product13.jpg" alt="" />
                        <div className="des">
                            <span>SANDJEST</span>
                            <h5>Jewellry Box</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$12</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopProduct;
