import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
import "../styles/Home.css";
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
                {/* Top Banner — the whole banner is one big link; "Shop All" is real text on top */}
                <Link to="/products/all" className="top-banner-wrap">
                    <img src={bannerImage} alt="" className="top-banner" />
                    {/* Phone-only version — shown at ≤768px (see Home.css) */}
                    <img src={bannerMobileImage} alt="" className="top-banner top-banner-mobile" />
                    <span className="top-banner-button">Shop All</span>
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

                    {/* Block 2: three images side by side, all aligned */}
                    <div className="home-images">
                        <div className="image-container">
                            <img src={leftImage} alt="Desktop computers and tech" className="home-image" />
                        </div>
                        <div className="image-container">
                            <img src={middleImage} alt="PC accessories and other tech" className="home-image" />
                        </div>
                        <div className="image-container">
                            <img src={rightImage} alt="Computers and tech for home and business" className="home-image" />
                        </div>
                    </div>
                </div>

                {/* Featured Products Carousel */}
                <FeaturedCarousel />

                {/* PC Repairs banner — whole banner links to bookings; label is real text on top */}
                <Link to="/bookings" className="repair-banner">
                    <img src={paletteImage} alt="" className="home-banner" />
                    {/* Phone-only version — shown at ≤768px (see Home.css) */}
                    <img src={paletteMobileImage} alt="" className="home-banner home-banner-mobile" />
                    <span className="repair-banner-button">Book Your PC In Here</span>
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default Home;
