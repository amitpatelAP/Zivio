import React, { useState, useEffect } from 'react';
import { useTracking } from '../hooks/useTracking';
import { getConversionNudgeCandidate } from '../utils/recommendationEngine';
import { Link } from 'react-router-dom';

const DiscountNudge = () => {
    const { history } = useTracking();
    const [candidate, setCandidate] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        const nudgeProduct = getConversionNudgeCandidate(history);
        if (nudgeProduct) {
            setCandidate(nudgeProduct);
            // Wait 2 seconds before showing the popup for better UX
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, [history, dismissed]);

    if (!isVisible || !candidate) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeBtn} onClick={() => { setIsVisible(false); setDismissed(true); }}>×</button>
                <div style={styles.content}>
                    <img src={candidate.image} alt={candidate.name} style={styles.image} />
                    <div style={styles.textContainer}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#1a1a1a' }}>Still thinking about it?</h3>
                        <p style={{ margin: '0 0 15px 0', color: '#465b52' }}>
                            We noticed you've been looking at the <strong>{candidate.name}</strong>. 
                            Checkout now and get an extra <strong>10% OFF</strong>!
                        </p>
                        <Link 
                            to="/cart" 
                            style={styles.actionBtn}
                            onClick={() => { setIsVisible(false); setDismissed(true); }}
                        >
                            Claim 10% Off
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        animation: 'slideUp 0.5s ease-out'
    },
    modal: {
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        maxWidth: '350px',
        position: 'relative',
        border: '2px solid #088178'
    },
    closeBtn: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#999'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    },
    image: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    textContainer: {
        flex: 1
    },
    actionBtn: {
        display: 'inline-block',
        background: '#088178',
        color: 'white',
        padding: '8px 15px',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.9rem'
    }
};

export default DiscountNudge;
