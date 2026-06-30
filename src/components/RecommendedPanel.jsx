import React, { useMemo } from 'react';
import { useTracking } from '../hooks/useTracking';
import { getRecommendations } from '../utils/recommendationEngine';
import { Link } from 'react-router-dom';

const RecommendedPanel = () => {
    const { history, trackProductView } = useTracking();
    
    // Memoize recommendations so it only recalculates when history changes
    const recommendedProducts = useMemo(() => getRecommendations(history), [history]);

    if (!history || history.length === 0) return null; // Don't show if they have no history

    return (
        <section className="section-p1">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a1a1a' }}>Recommended For You</h2>
                <p style={{ color: '#088178', fontSize: '1.2rem', marginTop: '10px' }}>
                    Curated based on your recent viewing history
                </p>
            </div>
            
            <div className="pro-container">
                {recommendedProducts.map((product) => (
                    <div className="pro" key={`rec-${product.id}`} onClick={() => trackProductView(product)}>
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
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecommendedPanel;
