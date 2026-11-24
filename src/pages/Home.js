import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { categoryHasProducts } from "../data/categories";
import "../styles/Home.css";
import "../styles/HybridBanner.css";
import paletteImage from "../assets/palette.webp";  // Repairs banner (desktop) — wording baked into the image
import paletteMobileImage from "../assets/palette-mobile.webp";  // PHONE version of the repairs banner — replace this file with your phone-sized image
import leftImage from "../assets/left.webp";  // Left tile: Office solutions
import rightImage from "../assets/right.webp";  // Right tile: Home & gaming
import bannerImage from "../assets/banner.webp";  // Top banner (desktop) — wording baked into the image
import bannerMobileImage from "../assets/banner-mobile.webp";  // PHONE version of the top banner — replace this file with your phone-sized image
import middleImage from "../assets/middle.webp";  // Middle tile: Accessories

const Home = () => {
    return (
        <>
            <main className="home-container">
                {/* Top banner — one image (all wording is part of the graphic),
                    the whole picture is a single link to Shop All. */}
                <Link to="/products/all" className="hybrid-banner hybrid-banner--shop">
                    <img
                        src={bannerImage}
                        alt="Shop all PCs &amp; tech — desktops, laptops, gaming rigs, monitors and accessories"
                        className="hybrid-banner-image hybrid-banner-image--desktop"
                    />
                    <img
                        src={bannerMobileImage}
                        alt=""
                        className="hybrid-banner-image hybrid-banner-image--mobile"
                    />
                </Link>

                <div className="home-content">
                    {/* Block 1: Welcome text + contact button */}
                    <div className="text-section">
                        <h1>Welcome to LocalTech!</h1>
                        <p>
                            Your local shop for desktop PCs, laptops, mini PCs, monitors, gaming rigs and
                            accessories. We build, repair and support computers for home and business —
                            with friendly, straight-talking service.
                        </p>
                        <p>Contact us today to find the right setup for you.</p>

                        {/* Button linking to the contact page */}
                        <Link to="/contact" className="contact-button">
                            Contact Us
                        </Link>
                    </div>

                    {/* Category carousels — same look and behaviour as Featured,
                        capped at 10 cards each with a Show all link underneath */}
                    <FeaturedCarousel
                        title="Desktop PCs"
                        category="Desktop PCs"
                        showAllPath="/products/desktop-pcs"
                    />
                    <FeaturedCarousel
                        title="Laptops"
                        category="Laptops"
                        showAllPath="/products/laptops"
                    />

                    {/* Block 2: three clickable category tiles — labels are part
                        of the images, so nothing sits on top of them. The first
                        two follow the empty-category hiding rule; the right tile
                        stays visible and points at Mini PCs while Gaming PCs
                        has no products yet. */}
                    <div className="home-images">
                        {categoryHasProducts("Desktop PCs") && (
                            <Link to="/products/desktop-pcs" className="image-container category-tile">
                                <img src={leftImage} alt="Office solutions — desktop PCs" className="home-image" />
                            </Link>
                        )}
                        {categoryHasProducts("PC Accessories") && (
                            <Link to="/products/pc-accessories" className="image-container category-tile">
                                <img src={middleImage} alt="Accessories — PC accessories" className="home-image" />
                            </Link>
                        )}
                        <Link to="/products/mini-pcs" className="image-container category-tile">
                            <img src={rightImage} alt="Home &amp; gaming — mini PCs" className="home-image" />
                        </Link>
                    </div>
                </div>

                {/* Featured Products Carousel */}
                <FeaturedCarousel showAllPath="/products/all" />

                {/* PC repairs banner — one image with the wording baked in,
                    the whole picture links to the bookings page. */}
                <Link to="/bookings" className="hybrid-banner hybrid-banner--repairs">
                    <img
                        src={paletteImage}
                        alt="Repairs &amp; diagnostics — PC giving you trouble? Drop it off or book a courier"
                        className="hybrid-banner-image hybrid-banner-image--desktop"
                    />
                    <img
                        src={paletteMobileImage}
                        alt=""
                        className="hybrid-banner-image hybrid-banner-image--mobile"
                    />
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default Home;
