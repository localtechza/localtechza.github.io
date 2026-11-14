// src/pages/Products/CategoryPage.js
// Shared layout used by every category page (Desktop PCs, Mini PCs, etc.)
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import Footer from "../../components/Footer";
import './CategoryPage.css';

// No category given = show every product (used by the Shop All page)
const CategoryPage = ({ title, category }) => {
    const categoryProducts = category
        ? products.filter(product => product.category === category)
        : products;

    return (
        <div className="category-page">
            <h1>{title}</h1>
            <div className="product-list">
                {categoryProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default CategoryPage;
