import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import RecommendedPanel from '../components/RecommendedPanel';
import { useTracking } from '../hooks/useTracking';

const ShopProduct = () => {
    const location = useLocation();
    const { trackProductView } = useTracking();
    
    // Default to first product if none is passed via state
    const product = location.state?.product || products[0];

    const [mainImgSrc, setMainImgSrc] = useState(product.image);

    // Track view when product changes
    useEffect(() => {
        if (product) {
            trackProductView(product);
            setMainImgSrc(product.image);
            window.scrollTo(0, 0); // Scroll to top when changing products
        }
    }, [product]);

    return (
        <>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImgSrc} width="100%" id="MainImg" alt={product.name} />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img 
                                src={product.image} 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => setMainImgSrc(product.image)}
                            />
                        </div>
                        {/* We could map over more images if they existed in the product object, using defaults here */}
                        <div className="small-img-col">
                            <img 
                                src="/imgs/img/s_product1a.webp" 
                                width="100%" 
                                className="small-img" 
                                alt="" 
                                onClick={() => setMainImgSrc('/imgs/img/s_product1a.webp')}
                            />
                        </div>
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Home / {product.category}</h6>
                    <h4>{product.name}</h4>
                    <h2>${product.price}</h2>
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
                    <span>Brand: {product.brand}<br />
                        High-quality materials designed for longevity.<br />
                        Category: {product.category}<br />
                        Free returns within 30 days.<br />
                        Occasion: Daily<br />
                        Theme: All Season</span>
                </div>
            </section>

            <RecommendedPanel />
        </>
    );
};

export default ShopProduct;
