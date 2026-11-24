import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useBackendWake } from "../utils/backendWake";
import "../styles/Cart.css";

const Cart = () => {
    // Warm the backend before the customer reaches the checkout buttons.
    useBackendWake();
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
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

                            return (
                                <li key={itemKey(item)}>
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
                        <Link to="/checkout">
                            <button className="checkout-button">Proceed to Checkout</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
