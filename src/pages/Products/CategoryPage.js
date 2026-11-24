// src/pages/Products/CategoryPage.js
// Shared layout used by every category page (Desktop PCs, Mini PCs, etc.)
import React, { useMemo, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import Footer from "../../components/Footer";
import './CategoryPage.css';

// Sorting options for the filter box above the grid
const SORT_OPTIONS = [
    { value: "newest", label: "Newest to oldest" },
    { value: "oldest", label: "Oldest to newest" },
    { value: "price-desc", label: "Price: high to low" },
    { value: "price-asc", label: "Price: low to high" },
];

// Products all have a single price; older entries with a price map are
// sorted on their cheapest variant so nothing falls to the bottom.
const priceOf = (product) => {
    if (typeof product.price === "number") return product.price;
    if (product.prices) {
        const values = Object.values(product.prices);
        return values.length ? Math.min(...values) : 0;
    }
    return 0;
};

// No category given = show every product (used by the Shop All page)
const CategoryPage = ({ title, category }) => {
    const [sort, setSort] = useState("newest");

    // Product Lister gives every new product a higher id than any existing
    // one, so id order is the order products were added to the catalogue.
    const categoryProducts = useMemo(() => {
        const list = category
            ? products.filter(product => product.category === category)
            : [...products];

        switch (sort) {
            case "price-desc":
                return list.sort((a, b) => priceOf(b) - priceOf(a));
            case "price-asc":
                return list.sort((a, b) => priceOf(a) - priceOf(b));
            case "oldest":
                return list.sort((a, b) => a.id - b.id);
            case "newest":
            default:
                return list.sort((a, b) => b.id - a.id);
        }
    }, [category, sort]);

    return (
        <div className="category-page">
            <h1>{title}</h1>

            {/* Sort/filter — applies instantly, no submit needed */}
            <div className="category-toolbar">
                <label htmlFor="category-sort">Sort by</label>
                <select
                    id="category-sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    {SORT_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="product-list">
                {categoryProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {categoryProducts.length === 0 && (
                <p className="category-empty">
                    No products in this category yet — check back soon.
                </p>
            )}
            <Footer />
        </div>
    );
};

export default CategoryPage;
