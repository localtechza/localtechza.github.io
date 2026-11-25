// src/components/Header.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.webp";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { visibleCategories } from "../data/categories";
import products from "../data/products";
import { isListed } from "../utils/productStatus";

// How many matches the dropdown shows before cutting off
const SEARCH_LIMIT = 8;

// Products all carry a single price; anything older with a price map is
// shown from its cheapest variant.
const priceOf = (product) => {
    if (typeof product.price === "number") return product.price;
    if (product.prices) {
        const values = Object.values(product.prices);
        return values.length ? Math.min(...values) : 0;
    }
    return 0;
};

const Header = () => {
    const { cart } = useCart();
    const { isSignedIn, email } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Live product search
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [resultsOpen, setResultsOpen] = useState(false);
    const searchRef = useRef(null);

    // Total number of products in the cart (adds up quantities)
    const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    // Close the mobile menu whenever the page changes (link clicked, back button, etc.)
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // "AJAX" search — matches are worked out shortly after each keystroke
    // instead of on submit, so the list updates while the customer types.
    useEffect(() => {
        const term = query.trim().toLowerCase();
        if (!term) {
            setResults([]);
            setResultsOpen(false);
            return undefined;
        }

        const timer = window.setTimeout(() => {
            const matches = products
                .filter((product) =>
                    isListed(product) &&
                    ((product.title || "").toLowerCase().includes(term) ||
                        (product.handle || "").toLowerCase().includes(term) ||
                        (product.category || "").toLowerCase().includes(term))
                )
                .slice(0, SEARCH_LIMIT);
            setResults(matches);
            setResultsOpen(true);
        }, 150);

        return () => window.clearTimeout(timer);
    }, [query]);

    // Click anywhere outside the search box closes the results
    useEffect(() => {
        const handleClickAway = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setResultsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickAway);
        return () => document.removeEventListener("mousedown", handleClickAway);
    }, []);

    // Leaving the page clears the search
    useEffect(() => {
        setQuery("");
        setResults([]);
        setResultsOpen(false);
    }, [location]);

    const goToProduct = (product) => {
        setQuery("");
        setResults([]);
        setResultsOpen(false);
        navigate(`/products/${product.handle}`);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (results.length > 0) goToProduct(results[0]);
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === "Escape") setResultsOpen(false);
    };

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="logo-container">
                <img src={logo} alt="LocalTech — home" className="logo" />
            </Link>

            {/* Live product search — sits between the logo and the page links,
                using the wide gap that used to sit empty on the right */}
            <div className="header-search" ref={searchRef}>
                <form className="header-search-form" onSubmit={handleSearchSubmit} role="search">
                    <svg
                        className="header-search-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
                    </svg>
                    <input
                        type="search"
                        value={query}
                        placeholder="Search products…"
                        aria-label="Search products"
                        onChange={(event) => setQuery(event.target.value)}
                        onFocus={() => query.trim() && setResultsOpen(true)}
                        onKeyDown={handleSearchKeyDown}
                    />
                    {query && (
                        <button
                            type="button"
                            className="header-search-clear"
                            aria-label="Clear search"
                            onClick={() => setQuery("")}
                        >
                            ×
                        </button>
                    )}
                </form>

                {/* Matching products drop down under the box — title on its own
                    line with the price beneath, so nothing is squeezed sideways */}
                {resultsOpen && query.trim() && results.length > 0 && (
                    <ul className="header-search-results">
                        {results.map((product) => (
                            <li key={product.id}>
                                <button
                                    type="button"
                                    className="header-search-result"
                                    onClick={() => goToProduct(product)}
                                >
                                    <img src={Object.values(product.images || {})[0]} alt="" />
                                    <span className="header-search-result-info">
                                        <span className="header-search-result-title">
                                            {product.title}
                                        </span>
                                        <span className="header-search-result-price">
                                            R{priceOf(product).toFixed(2)}
                                        </span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {resultsOpen && query.trim() && results.length === 0 && (
                    <div className="header-search-results header-search-empty">
                        No products match “{query.trim()}”.
                    </div>
                )}
            </div>

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
                            {/* Shop All is always here; each category below only
                                appears while it has at least one product */}
                            <li><Link to="/products/all">Shop All</Link></li>
                            {visibleCategories.map(category => (
                                <li key={category.path}>
                                    <Link to={category.path}>{category.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Account + cart + hamburger — always visible, never in the menu */}
            <div className="header-actions">
                <Link
                    to={isSignedIn ? "/profile" : "/login"}
                    className={`header-account${isSignedIn ? " is-signed-in" : ""}`}
                    aria-label={isSignedIn ? `My account (${email})` : "Sign in"}
                    title={isSignedIn ? `Signed in as ${email}` : "Sign in"}
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {isSignedIn && <span className="account-dot" aria-hidden="true"></span>}
                </Link>

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
