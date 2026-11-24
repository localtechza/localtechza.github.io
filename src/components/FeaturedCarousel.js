import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import featuredProducts from '../data/featuredProducts';
import './FeaturedCarousel.css';

// One carousel component used three ways on the home page:
//   <FeaturedCarousel />                                -> Featured Products
//   <FeaturedCarousel title="Desktop PCs" category="Desktop PCs" />
//   <FeaturedCarousel title="Laptops" category="Laptops" />
// A carousel with no products renders nothing, and each instance keeps its
// own track ref so the arrows only scroll the carousel they belong to.
const FeaturedCarousel = ({ title = "Featured Products", category, showAllPath }) => {
    const trackRef = useRef(null);

    const allItems = category
        ? products.filter(product => product.category === category)
        : featuredProducts
              .map(handle => products.find(p => p.handle === handle))
              .filter(Boolean);

    if (allItems.length === 0) return null;

    // Never more than 10 cards in the strip — anything else lives on the
    // category page behind the "Show all" button underneath.
    const items = allItems.slice(0, 10);

    // Move exactly one card + gap per click, so paging always lands on a
    // whole card instead of stopping halfway between two of them.
    const scrollByCard = (direction) => {
        const container = trackRef.current;
        if (!container) return;
        const card = container.querySelector('.carousel-card');
        const gap = 20;
        const step = card ? card.getBoundingClientRect().width + gap : 300;
        container.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    const scrollLeft = () => scrollByCard(-1);
    const scrollRight = () => scrollByCard(1);

    return (
        <div className="featured-carousel">
            <h2 className="carousel-title">{title}</h2>

            <div className="carousel-container">
                <button className="carousel-btn carousel-btn-left" onClick={scrollLeft}>
                    &#8249;
                </button>

                <div className="carousel-track" ref={trackRef}>
                    {items.map(product => {
                        const imageUrl = Object.values(product.images)[0];
                        return (
                            <Link
                                to={`/products/${product.handle}`}
                                key={product.id}
                                className="carousel-card"
                            >
                                <div className="carousel-card-image">
                                    <img src={imageUrl} alt={product.title} />
                                </div>
                                <div className="carousel-card-info">
                                    <h3>{product.title}</h3>
                                    <p className="carousel-card-price">R{product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <button className="carousel-btn carousel-btn-right" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>

            {/* Jump to the full list (Shop All, or the category page) */}
            {showAllPath && (
                <div className="carousel-show-all-row">
                    <Link to={showAllPath} className="carousel-show-all">
                        {category ? `Show all ${title}` : "Show all products"}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default FeaturedCarousel;
