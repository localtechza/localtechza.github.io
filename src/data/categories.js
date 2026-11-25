// src/data/categories.js
// The one list of product categories shown around the site.
//
// The header dropdown and the home-page tiles both read this list, and both
// hide a category while it has no products in the catalogue (products.js).
// As soon as Product Lister adds a product to that category it appears again
// — nothing has to be switched on by hand.
import products from "./products";
import { isListed } from "../utils/productStatus";

const categories = [
    { title: "Desktop PCs", path: "/products/desktop-pcs" },
    { title: "Laptops", path: "/products/laptops" },
    { title: "Mini PCs", path: "/products/mini-pcs" },
    { title: "Monitors", path: "/products/monitors" },
    { title: "Gaming PCs", path: "/products/gaming-pcs" },
    { title: "PC Accessories", path: "/products/pc-accessories" },
    { title: "Other Tech", path: "/products/other-tech" },
];

// Does this category currently have at least one product people can see?
// (Drafted products don't count — the category hides until one is live.)
export const categoryHasProducts = (title) =>
    products.some(
        (product) => product.category === title && isListed(product)
    );

// Only the categories worth showing right now.
export const visibleCategories = categories.filter((category) =>
    categoryHasProducts(category.title)
);

export default categories;
