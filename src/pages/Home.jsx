import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import RecommendedPanel from '../components/RecommendedPanel';
import { useTracking } from '../hooks/useTracking';

const Home = () => {
    const { trackProductView } = useTracking();
    const navigate = useNavigate();
    const featuredProducts = products.slice(0, 8);
    const newArrivals = products.slice(8, 16);

    return (
        <>
            <section id="hero">
                <h4>Trade-In Offers + Super Deals = Your Dream Products!</h4>
                <h2>Super values deals</h2>
                <h1>Limited-Time Offers!</h1>
                <p>Save Big on Customized Goodies – Up to 70% Off!</p>
                <button onClick={() => navigate('/shop')}>Shop Now</button>
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

            <RecommendedPanel />

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Your World, Customized – From Wearables to Décor, Tech to Treasures.</p>
                <div className="pro-container">
                    {featuredProducts.map(product => (
                        <div className="pro" key={product.id} onClick={() => trackProductView(product)}>
                            <Link to="/shop-product" state={{ product }}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i className="fas fa-star" key={i}></i>
                                    ))}
                                </div>
                                <h4>${product.price}</h4>
                            </div>
                            <Link to="/shop-product" state={{ product }}><i className="fa-solid fa-cart-shopping cart"></i></Link>
                        </div>
                    ))}
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All T-shirts and Accessories</h2>
                <button className="normal" onClick={() => navigate('/shop')}>Explore Mode</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    {newArrivals.map(product => (
                        <div className="pro" key={product.id} onClick={() => trackProductView(product)}>
                            <Link to="/shop-product" state={{ product }}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i className="fas fa-star" key={i}></i>
                                    ))}
                                </div>
                                <h4>${product.price}</h4>
                            </div>
                            <Link to="/shop-product" state={{ product }}><i className="fa-solid fa-cart-shopping cart"></i></Link>
                        </div>
                    ))}
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best customized t-shirt is on sale at crafti</span>
                    <button className="white" onClick={() => navigate('/shop')}>Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upsoming season</h2>
                    <span>The best customized t-shirt is on sale at crafti</span>
                    <button className="white" onClick={() => navigate('/shop')}>Collection</button>
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
