import { useState, useEffect } from 'react';

// Key for LocalStorage
const TRACKING_KEY = 'zivio_watch_history';

export const useTracking = () => {
    const [history, setHistory] = useState([]);

    // Load history on mount
    useEffect(() => {
        const storedHistory = localStorage.getItem(TRACKING_KEY);
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    // Track a product view
    const trackProductView = (product) => {
        setHistory((prevHistory) => {
            const existingIndex = prevHistory.findIndex(item => item.id === product.id);
            let newHistory = [...prevHistory];

            if (existingIndex > -1) {
                // Increment view count and update timestamp
                newHistory[existingIndex].viewCount += 1;
                newHistory[existingIndex].lastViewed = Date.now();
            } else {
                // Add new product to history
                newHistory.push({
                    id: product.id,
                    category: product.category,
                    brand: product.brand,
                    viewCount: 1,
                    lastViewed: Date.now()
                });
            }

            // Keep only the 50 most recent unique items to prevent local storage bloat
            newHistory.sort((a, b) => b.lastViewed - a.lastViewed);
            if (newHistory.length > 50) {
                newHistory = newHistory.slice(0, 50);
            }

            localStorage.setItem(TRACKING_KEY, JSON.stringify(newHistory));
            return newHistory;
        });
    };

    const clearHistory = () => {
        localStorage.removeItem(TRACKING_KEY);
        setHistory([]);
    };

    return { history, trackProductView, clearHistory };
};
