import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../../data/products';
import './ProductDetails.css';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { recordView } from '../../utils/viewed';

const ProductDetails = () => {
    const { handle } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.handle === handle);

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [basePrice, setBasePrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState('');

    const { addToCart } = useCart();
    const { token } = useAuth();

    // Remember this product for the customer's "Recently viewed" list
    // (always saved in this browser; mirrored to their account when signed in)
    useEffect(() => {
        if (product) recordView(product, token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product?.handle]);

    useEffect(() => {
        if (product) {
            const options = product.options || [];
            if (!selectedColor && options.some(opt => opt.name === "Color")) {
                setSelectedColor(options.find(opt => opt.name === "Color")?.values[0]);
            }
            if (!selectedSize && options.some(opt => opt.name === "Size")) {
                setSelectedSize(options.find(opt => opt.name === "Size")?.values[0]);
            }
        }
    }, [product, selectedColor, selectedSize]);

    useEffect(() => {
        if (product) {
            const calculatedPrice = product?.prices?.[selectedSize] ?? product?.price ?? 0;
            setBasePrice(calculatedPrice);
        }
    }, [selectedSize, product]);

    // Get the color-variant image (controlled by the color selector).
    // Colour photos are keyed either by colour alone or by "<colour> Plain",
    // so both are tried before falling back.
    const firstImage = product.images ? Object.values(product.images)[0] : undefined;
    const colorVariantImage =
        product.images?.[`${selectedColor} Plain`] ||
        product.images?.[selectedColor] ||
        product.images?.["Midnight Sky Plain"] ||
        firstImage ||
        "default-image.jpg";

    // Main image: if user clicked a thumbnail, show that; otherwise show color variant
    const mainImage = selectedImage || colorVariantImage;

    // Reset to color variant when color/line art changes
    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
        setSelectedImage('');
    };

    const handleSizeChange = (e) => setSelectedSize(e.target.value);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = () => {
        const itemPrice = basePrice;

        if (isNaN(itemPrice) || itemPrice <= 0) {
            alert('Price is not available or invalid.');
            return false;
        }

        const cartItem = {
            id: product.id,
            handle: product.handle,
            title: product.title,
            image: mainImage,
            price: itemPrice,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
        };

        addToCart(cartItem, quantity);

        const itemMessage = `${quantity} ${product.title}(s) added to cart!`;
        setMessage(itemMessage);

        setTimeout(() => {
            setMessage("");
        }, 3000);

        return true;
    };

    const handleBuyNow = () => {
        if (handleAddToCart()) {
            navigate('/checkout');
        }
    };

    // Total price updates automatically whenever quantity or options change
    const totalPrice = (basePrice || product.price || 0) * quantity;

    const hasColorOption = product.options?.some(opt => opt.name === "Color");
    const hasSizeOption = product.options?.some(opt => opt.name === "Size");

    // Thumbnails: the extra photos (allImages) PLUS the default photo —
    // the one showing when the page opens. Without it, once a customer
    // clicked another thumbnail they could never get back to the first
    // image without refreshing. Duplicates are dropped, so a product that
    // already lists its first photo in allImages doesn't show it twice.
    const extraImages = product.allImages || [];
    const galleryImages = extraImages.length
        ? [colorVariantImage, ...extraImages].filter(
              (img, i, arr) => img && arr.indexOf(img) === i
          )
        : [];
    const hasGallery = galleryImages.length > 0;

    return (
        <div className="product-details">
            <div className="product-images">
                {/* Main Image */}
                <div className="main-image-container">
                    <img
                        className="main-image"
                        src={mainImage}
                        alt={`${product?.title || "Product"}${selectedColor ? ` — ${selectedColor}` : ""}`}
                    />
                </div>

                {/* Thumbnail Gallery */}
                {hasGallery && (
                    <div className="thumbnail-gallery">
                        {galleryImages.map((img, index) => (
                            <img
                                key={index}
                                className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                                src={img}
                                alt={`${product.title} view ${index + 1}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="product-info">
                {/* Title and price stay at the top of the right-hand column */}
                <div className="product-summary">
                    <h1>{product.title}</h1>
                    <p className="product-price">
                        R{totalPrice.toFixed(2)}
                    </p>
                </div>

                {/* Product options (when the product has any) */}
                <div className="product-options">
                    {/* Color Selection */}
                    {hasColorOption && (
                        <div className="product-option">
                            <label>Color:</label>
                            <select value={selectedColor} onChange={handleColorChange}>
                                {product.options.find(opt => opt.name === "Color")?.values.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Size Selection */}
                    {hasSizeOption && (
                        <div className="product-option">
                            <label>Size:</label>
                            <select value={selectedSize} onChange={handleSizeChange}>
                                {product.options.find(opt => opt.name === "Size")?.values.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* Quantity + Add to Cart in their own section */}
                <div className="purchase-section">
                    <div className="quantity-selector">
                        <button onClick={decrementQuantity} aria-label="Decrease quantity">-</button>
                        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                        <button onClick={incrementQuantity} aria-label="Increase quantity">+</button>
                    </div>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>

                {/* Buy Now goes straight to checkout with this item in the cart */}
                <button className="buy-now" onClick={handleBuyNow}>
                    Buy Now
                </button>

                {/* Description comes last */}
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
            </div>

            {/* Message Display */}
            {message && <div className="cart-message">{message}</div>}
        </div>
    );
};

export default ProductDetails;
