import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import featuredProducts from '../data/featuredProducts';
import { isListed, isOutOfStock } from '../utils/productStatus';
import { useCart } from '../context/CartContext';
import './FeaturedCarousel.css';

// One carousel component used three ways on the home page:
//   <FeaturedCarousel />                                -> Featured Products
//   <FeaturedCarousel title="Desktop PCs" category="Desktop PCs" />
//   <FeaturedCarousel title="Laptops" category="Laptops" />
// A carousel with no products renders nothing, and each instance keeps its
// own track ref so the arrows only scroll the carousel they belong to.
const FeaturedCarousel = ({ title = "Featured Products", category, showAllPath }) => {
    const trackRef = useRef(null);
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState(null);

    const allItems = (category
        ? products.filter(product => product.category === category)
        : featuredProducts
              .map(handle => products.find(p => p.handle === handle))
              .filter(Boolean)
    // Drafts never show anywhere on the site
    ).filter(isListed);

    if (allItems.length === 0) return null;

    // Never more than 10 cards in the strip — anything else lives on the
    // category page behind the "Show all" button underneath.
    const items = allItems.slice(0, 10);

    // Same rules as the category tiles: quantity 1 at the lowest listed
    // price, using the product's first option values.
    const handleAddToCart = (product, event) => {
        event.preventDefault();
        event.stopPropagation();

        if (isOutOfStock(product)) return;

        const image = Object.values(product.images || {})[0];
        const optionValue = (name) =>
            product.options?.find(option => option.name === name)?.values?.[0] || "";

        addToCart({
            id: product.id,
            handle: product.handle,
            title: product.title,
            image,
            price: product.price,
            color: optionValue("Color"),
            size: optionValue("Size"),
            quantity: 1,
        });

        setAddedId(product.id);
        window.setTimeout(() => setAddedId(null), 1500);
    };

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
                        const outOfStock = isOutOfStock(product);
                        return (
                            <div className="carousel-card" key={product.id}>
                                <Link
                                    className="carousel-card-link"
                                    to={`/products/${product.handle}`}
                                >
                                    <div className="carousel-card-image">
                                        <img src={imageUrl} alt={product.title} />
                                        {outOfStock && (
                                            <span className="carousel-card-badge">
                                                Out of stock
                                            </span>
                                        )}
                                    </div>
                                    <div className="carousel-card-info">
                                        <h3>{product.title}</h3>
                                        <p className="carousel-card-price">
                                            R{product.price.toFixed(2)}
                                        </p>
                                    </div>
                                </Link>
                                <button
                                    type="button"
                                    className="carousel-card-add"
                                    disabled={outOfStock}
                                    onClick={(event) => handleAddToCart(product, event)}
                                    aria-label={outOfStock
                                        ? `${product.title} is out of stock`
                                        : `Add ${product.title} to cart`}
                                >
                                    {outOfStock
                                        ? 'Out of stock'
                                        : (addedId === product.id ? 'Added ✓' : 'Add to Cart')}
                                </button>
                            </div>
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
