import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
import "../styles/Home.css";
import "../styles/HybridBanner.css";
import paletteImage from "../assets/palette.webp";  // Decorative banner image
import paletteMobileImage from "../assets/palette-mobile.webp";  // PHONE version of the repairs banner — replace this file with your phone-sized image
import leftImage from "../assets/left.webp";  // Left image
import rightImage from "../assets/right.webp";  // Right image
import bannerImage from "../assets/banner.webp";  // Top banner image
import bannerMobileImage from "../assets/banner-mobile.webp";  // PHONE version of the top banner — replace this file with your phone-sized image
import middleImage from "../assets/middle.webp";  // PC Accessories & Other Tech image

const Home = () => {
    return (
        <>
            <main className="home-container">
                {/* Top Banner — CSS design + real text over a soft photo layer.
                    The whole banner is one link; images are decorative only. */}
                <Link to="/products/all" className="hybrid-banner hybrid-banner--shop">
                    <img src={bannerImage} alt="" className="hybrid-banner-image hybrid-banner-image--desktop" />
                    <img src={bannerMobileImage} alt="" className="hybrid-banner-image hybrid-banner-image--mobile" />
                    <span className="hybrid-banner-scrim" aria-hidden="true" />
                    <span className="hybrid-banner-content">
                        <span className="hybrid-banner-eyebrow">Chosen Thoughtfully</span>
                        <span className="hybrid-banner-title">Shop all PCs &amp; tech</span>
                        <span className="hybrid-banner-subtitle">
                            Desktops, laptops, gaming rigs, monitors and accessories — with friendly local support.
                        </span>
                    </span>
                    <span className="hybrid-banner-button">Shop All</span>
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

                    {/* Block 2: three clickable category tiles — real labels over the photos */}
                    <div className="home-images">
                        <Link to="/products/desktop-pcs" className="image-container category-tile">
                            <img src={leftImage} alt="" className="home-image" />
                            <span className="category-tile-scrim" aria-hidden="true" />
                            <span className="category-tile-label">Office solutions</span>
                        </Link>
                        <Link to="/products/pc-accessories" className="image-container category-tile">
                            <img src={middleImage} alt="" className="home-image" />
                            <span className="category-tile-scrim" aria-hidden="true" />
                            <span className="category-tile-label">Accessories</span>
                        </Link>
                        <Link to="/products/gaming-pcs" className="image-container category-tile">
                            <img src={rightImage} alt="" className="home-image" />
                            <span className="category-tile-scrim" aria-hidden="true" />
                            <span className="category-tile-label">Home &amp; gaming</span>
                        </Link>
                    </div>
                </div>

                {/* Featured Products Carousel */}
                <FeaturedCarousel />

                {/* PC Repairs banner — same hybrid design, links to bookings */}
                <Link to="/bookings" className="hybrid-banner hybrid-banner--repairs">
                    <img src={paletteImage} alt="" className="hybrid-banner-image hybrid-banner-image--desktop" />
                    <img src={paletteMobileImage} alt="" className="hybrid-banner-image hybrid-banner-image--mobile" />
                    <span className="hybrid-banner-scrim" aria-hidden="true" />
                    <span className="hybrid-banner-content">
                        <span className="hybrid-banner-eyebrow">Repairs &amp; Diagnostics</span>
                        <span className="hybrid-banner-title">PC giving you trouble?</span>
                        <span className="hybrid-banner-subtitle">
                            Drop it off or book a courier — we'll diagnose it first and quote before any work.
                        </span>
                    </span>
                    <span className="hybrid-banner-button">Book Your PC In Here</span>
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default Home;
