import { products } from '../data/products';

export const getRecommendations = (history) => {
    // If no history, just return random/popular products
    if (!history || history.length === 0) {
        return products.slice(0, 4); // Just return first 4 for now
    }

    // 1. Analyze Category Affinity
    const categoryScores = {};
    history.forEach(item => {
        if (!categoryScores[item.category]) {
            categoryScores[item.category] = 0;
        }
        // Heavily weight items viewed multiple times
        categoryScores[item.category] += (item.viewCount * 2); 
    });

    // 2. Sort categories by affinity
    const topCategories = Object.keys(categoryScores).sort((a, b) => categoryScores[b] - categoryScores[a]);

    // 3. Find products in top categories that the user hasn't seen yet (or has seen and we want to push them)
    let recommendations = [];
    
    // First, try to fill with products from their favorite categories
    for (const cat of topCategories) {
        const catProducts = products.filter(p => p.category === cat);
        recommendations = [...recommendations, ...catProducts];
    }

    // Deduplicate and limit to 4
    recommendations = [...new Set(recommendations)];
    
    // If we don't have 4, fill with randoms
    if (recommendations.length < 4) {
        const fillers = products.filter(p => !recommendations.includes(p));
        recommendations = [...recommendations, ...fillers];
    }

    return recommendations.slice(0, 4);
};

// Check if any product has been viewed > 3 times (candidate for conversion nudge)
export const getConversionNudgeCandidate = (history) => {
    if (!history || history.length === 0) return null;
    
    const highlyViewed = history.find(item => item.viewCount >= 3);
    if (highlyViewed) {
        return products.find(p => p.id === highlyViewed.id);
    }
    return null;
};
