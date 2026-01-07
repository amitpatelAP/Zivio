import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section id="hero">
                <h4>Trade-In Offers + Super Deals = Your Dream Products!</h4>
                <h2>Super values deals</h2>
                <h1>Limited-Time Offers!</h1>
                <p>Save Big on Customized Goodies – Up to 70% Off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="/imgs/img/Feature_shipping.jpg" alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_order.jpg" alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_money.avif" alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_promotion.avif" alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_Sell.avif" alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="/imgs/img/Feature_Support.avif" alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Your World, Customized – From Wearables to Décor, Tech to Treasures.</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="/imgs/img/Product_1.avif" alt="" />
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product2.webp" alt="" />
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product3.jpg" alt="" />
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product4.jpg" alt="" />
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product5.jpg" alt="" />
                        <div className="des">
                            <span>Generic</span>
                            <h5>Tree of Life Metal Wall Art</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$27</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product6.jpg" alt="" />
                        <div className="des">
                            <span>Foxblossom Co.</span>
                            <h5>Personalized Gift Box</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$24</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product7.webp" alt="" />
                        <div className="des">
                            <span>Etsy</span>
                            <h5>Couple Cat Case</h5>
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/product8.avif" alt="" />
                        <div className="des">
                            <span>BraveHeart001</span>
                            <h5>Stainless Steel Jewellry</h5>
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All T-shirts and Accessories</h2>
                <button className="normal">Explore Mode</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="/imgs/img/arrival_1.webp" alt="" />
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival2.jpg" alt="" />
                        <div className="des">
                            <span>Luffy</span>
                            <h5>Luffy T-shirt</h5>
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival3.webp" alt="" />
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
                            <h4>$21</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival4.webp" alt="" />
                        <div className="des">
                            <span>yourAnime</span>
                            <h5>Summer Anime T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$14</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival5.jpg" alt="" />
                        <div className="des">
                            <span>yourPrint</span>
                            <h5>Cushions</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$27</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival6.jpg" alt="" />
                        <div className="des">
                            <span>Zoci Voci</span>
                            <h5>Personalized Gift</h5>
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival7.webp" alt="" />
                        <div className="des">
                            <span>Kirin Jewellry</span>
                            <h5>Gold Plated Silver Ring</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$22</h4>
                        </div>
                        <div className="cart">
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="/imgs/img/arrival8.webp" alt="" />
                        <div className="des">
                            <span>Artigifts</span>
                            <h5>Magnetic Keychain</h5>
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
                            <Link to="/shop-product"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best customized t-shirt is on sale at crafti</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upsoming season</h2>
                    <span>The best customized t-shirt is on sale at crafti</span>
                    <button className="white">Collection</button>
                </div>
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Summer Collection-30% Off</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW COLLECTION</h2>
                    <h3>Trendy Designs</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>
        </>
    );
};

export default Home;
