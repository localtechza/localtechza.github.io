// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const Header = () => {
    const { cart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Total number of products in the cart (adds up quantities)
    const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    // Close the mobile menu whenever the page changes (link clicked, back button, etc.)
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="logo-container">
                <img src={logo} alt="LocalTech Logo" className="logo" />
            </Link>

            {/* Navigation */}
            <nav id="main-menu" className={`main-nav${menuOpen ? " is-open" : ""}`}>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    {/* Shop dropdown — hover/focus opens it on desktop (Header.css).
                        On phones the button is hidden and its links flatten
                        straight into the hamburger menu. */}
                    <li className="has-dropdown">
                        <button
                            type="button"
                            className="nav-dropdown-toggle"
                            aria-haspopup="true"
                            aria-label="Shop product categories"
                        >
                            Shop <span className="nav-caret" aria-hidden="true">▾</span>
                        </button>
                        <ul className="nav-dropdown">
                            <li><Link to="/products/all">Shop All</Link></li>
                            <li><Link to="/products/desktop-pcs">Desktop PCs</Link></li>
                            <li><Link to="/products/laptops">Laptops</Link></li>
                            <li><Link to="/products/mini-pcs">Mini PCs</Link></li>
                            <li><Link to="/products/monitors">Monitors</Link></li>
                            <li><Link to="/products/gaming-pcs">Gaming PCs</Link></li>
                            <li><Link to="/products/pc-accessories">PC Accessories</Link></li>
                            <li><Link to="/products/other-tech">Other Tech</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Cart + hamburger — always visible, never inside the menu */}
            <div className="header-actions">
                <Link
                    to="/cart"
                    className="header-cart"
                    aria-label={`Cart, ${cartCount} product${cartCount === 1 ? "" : "s"}`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className={`cart-count${cartCount === 0 ? " is-empty" : ""}`}>
                        {cartCount}
                    </span>
                </Link>

                {/* Hamburger button — only visible on tablets and phones (see Header.css) */}
                <button
                    className={`menu-toggle${menuOpen ? " is-open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
