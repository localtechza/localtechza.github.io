import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products";
import { productStatus } from "../utils/productStatus";
import { useBackendWake } from "../utils/backendWake";
import "../styles/Cart.css";

const Cart = () => {
    // Warm the backend before the customer reaches the checkout buttons.
    useBackendWake();
    const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Items added before images were stored in the cart still get a thumbnail
    // by looking the product up in the catalogue. Service bookings have none.
    const imageFor = (item) => {
        if (item.image) return item.image;
        const product = products.find((p) => p.id === item.id || p.handle === item.handle);
        if (!product?.images) return null;
        return (
            product.images[`${item.color || ""} Plain`] ||
            product.images[item.color] ||
            Object.values(product.images)[0] ||
            null
        );
    };

    const itemKey = (item) =>
        `${item.id}-${item.color || ""}-${item.size || ""}`;

    // What the catalogue says about this line's product now. Bookings have
    // no matching product, so they are always treated as live.
    const statusFor = (item) => {
        const product = products.find(
            (p) => p.id === item.id || (item.handle && p.handle === item.handle)
        );
        return product ? productStatus(product) : "live";
    };

    // Drafted/out-of-stock items block checkout until they're removed
    const hasBlockedItems = cart.some((item) => statusFor(item) !== "live");

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => {
                            const image = imageFor(item);
                            const productLink = item.handle ? `/products/${item.handle}` : null;
                            const status = statusFor(item);
                            const blocked = status !== "live";

                            return (
                                <li key={itemKey(item)} className={blocked ? "is-blocked" : ""}>
                                    <div className="cart-item">
                                        {image && (
                                            <Link to={productLink || "#"} className="cart-item-image-link">
                                                <img src={image} alt={item.title} className="cart-item-image" />
                                            </Link>
                                        )}
                                        <div className="cart-item-details">
                                            <h3>
                                                {productLink ? (
                                                    <Link to={productLink}>{item.title}</Link>
                                                ) : (
                                                    item.title
                                                )}
                                            </h3>
                                            <p>{item.quantity} x R{item.price.toFixed(2)}</p>
                                            {item.color && <p>Color: {item.color}</p>}
                                            {item.size && <p>Size: {item.size}</p>}
                                            {status === "out" && (
                                                <p className="cart-item-warning">
                                                    Out of stock — remove this item to check out.
                                                </p>
                                            )}
                                            {status === "draft" && (
                                                <p className="cart-item-warning">
                                                    No longer available — remove this item to check out.
                                                </p>
                                            )}

                                            {/* Change the quantity right here — no need to
                                                go back to the product page */}
                                            <div className="cart-item-qty">
                                                <label htmlFor={`qty-${itemKey(item)}`}>Qty:</label>
                                                <button
                                                    type="button"
                                                    aria-label={`Decrease quantity of ${item.title}`}
                                                    onClick={() => updateQuantity(item, (item.quantity || 1) - 1)}
                                                    disabled={(item.quantity || 1) <= 1}
                                                >
                                                    −
                                                </button>
                                                <input
                                                    id={`qty-${itemKey(item)}`}
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity || 1}
                                                    onChange={(e) => updateQuantity(item, e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    aria-label={`Increase quantity of ${item.title}`}
                                                    onClick={() => updateQuantity(item, (item.quantity || 1) + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button className="remove-button" onClick={() => removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: R{totalPrice.toFixed(2)}</p>
                        <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
                        {hasBlockedItems ? (
                            <button className="checkout-button" disabled>
                                Remove unavailable items to check out
                            </button>
                        ) : (
                            <Link to="/checkout">
                                <button className="checkout-button">Proceed to Checkout</button>
                            </Link>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
