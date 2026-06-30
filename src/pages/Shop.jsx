import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import RecommendedPanel from '../components/RecommendedPanel';
import { useTracking } from '../hooks/useTracking';

const Shop = () => {
    const navigate = useNavigate();
    const { trackProductView } = useTracking();

    return (
        <>
            <section id="page-header">
                <h2>#stayhome</h2>
                <p>Save more with coupons & up to 70% off.</p>
            </section>

            <RecommendedPanel />

            <section id="product1" className="section-p1">
                <div className="pro-container">
                    {products.map(product => (
                        <div className="pro" key={product.id} onClick={() => {
                            trackProductView(product);
                            navigate('/shop-product', { state: { product } });
                        }}>
                            <img src={product.image} alt={product.name} />
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i className="fas fa-star" key={i}></i>
                                    ))}
                                </div>
                                <h4>₹{product.price}</h4>
                            </div>
                            <div className="cart">
                                <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-cart-shopping"></i></Link>
                            </div>
                        </div>
                    ))}
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
