import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();

    return (
        <>
            <section id="page-header">
                <h2>#stayhome</h2>
                <p>Save more with coupons & up tp 70% off.</p>
            </section>

            <section id="product1" className="section-p1">
                <div className="pro-container">
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product1.jpg" alt="" />
                        <div className="des">
                            <span>Shop Ghumakkad</span>
                            <h5>Unisex Hoodie</h5>
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
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product2.jpg" alt="" />
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
                            <h4>$1.2</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product3.avif" alt="" />
                        <div className="des">
                            <span>PatPat</span>
                            <h5>Unisex T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$0.99</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product4.jpg" alt="" />
                        <div className="des">
                            <span>SANDJEST</span>
                            <h5>Men's T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$0.78</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product5.jpg" alt="" />
                        <div className="des">
                            <span>Generic</span>
                            <h5>Printed T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$0.87</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product6.webp" alt="" />
                        <div className="des">
                            <span>MI</span>
                            <h5>Crewneck Sweatshirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$26.99</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product7.jpg" alt="" />
                        <div className="des">
                            <span>ANISAN</span>
                            <h5>Unisex Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$6</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product8.jpg" alt="" />
                        <div className="des">
                            <span>Fashion</span>
                            <h5>Short Sleeve T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$9</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product9.webp" alt="" />
                        <div className="des">
                            <span>Fashion</span>
                            <h5>Long Sleeve Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$29.99</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product10.jpg" alt="" />
                        <div className="des">
                            <span>Luffy</span>
                            <h5>Luffy Hoodie</h5>
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
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product11.jpg" alt="" />
                        <div className="des">
                            <span>ANISAN</span>
                            <h5>Couple Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$26.9</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product12.jpg" alt="" />
                        <div className="des">
                            <span>yourAnime</span>
                            <h5>Anime Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$14.5</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product13.jpg" alt="" />
                        <div className="des">
                            <span>yourPrint</span>
                            <h5>Printed Jacket</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$12.3</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product14.jpg" alt="" />
                        <div className="des">
                            <span>MI</span>
                            <h5>Men's Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$6.77</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product15.jpg" alt="" />
                        <div className="des">
                            <span>eBay</span>
                            <h5>Tshirt Pullover Hoodie</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$8.66</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro" onClick={() => navigate('/shop-product')}>
                        <img src="/imgs/img/shop_product16.jpg" alt="" />
                        <div className="des">
                            <span>Fashion</span>
                            <h5>Tshirt Pullover Jacket</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$10.9</h4>
                        </div>
                        <div className="cart">
                            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
            </section>
        </>
    );
};

export default Shop;
