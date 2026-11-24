import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const productImage = product.images && Object.values(product.images).length > 0
        ? Object.values(product.images)[0]
        : 'default-image.jpg';

    let priceDisplay = "Price not available";
    let priceValue = null;

    if (product.prices) {
        const priceValues = Object.values(product.prices);
        const minPrice = Math.min(...priceValues);
        const maxPrice = Math.max(...priceValues);
        priceValue = minPrice;
        priceDisplay = minPrice === maxPrice
            ? `R${minPrice.toFixed(2)}`
            : `R${minPrice.toFixed(2)} - R${maxPrice.toFixed(2)}`;
    } else if (product.price !== undefined) {
        priceValue = product.price;
        priceDisplay = `R${product.price.toFixed(2)}`;
    }

    const optionValue = (name) =>
        product.options?.find(option => option.name === name)?.values?.[0] || "";

    const handleAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!priceValue || priceValue <= 0) {
            return;
        }

        addToCart({
            id: product.id,
            handle: product.handle,
            title: product.title,
            image: productImage,
            price: priceValue,
            color: optionValue("Color"),
            size: optionValue("Size"),
            lineArt: "Plain",
            stand: "No Stand",
            quantity: 1,
        });

        setAdded(true);
        window.setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="product-card">
            <Link className="product-card-link" to={product.handle ? `/products/${product.handle}` : '#'}>
                <img src={productImage} alt={product.title || 'Product image'} />
                <div>
                    <h3>{product.title || 'No title available'}</h3>
                    <p>{priceDisplay}</p>
                </div>
            </Link>
            <button
                type="button"
                className="product-card-add"
                onClick={handleAddToCart}
                aria-label={`Add ${product.title || 'product'} to cart`}
            >
                {added ? 'Added ✓' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
