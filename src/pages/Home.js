import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
import "../styles/Home.css";
import paletteImage from "../assets/palette.png";  // Decorative banner image
import paletteMobileImage from "../assets/palette-mobile.png";  // PHONE version of the repairs banner — replace this file with your phone-sized image
import leftImage from "../assets/left.jpg";  // Left image
import rightImage from "../assets/right.jpg";  // Right image
import bannerImage from "../assets/banner.jpg";  // Top banner image
import bannerMobileImage from "../assets/banner-mobile.jpg";  // PHONE version of the top banner — replace this file with your phone-sized image
import middleImage from "../assets/middle.jpg";  // PC Accessories & Other Tech image

const Home = () => {
    return (
        <>
            <main className="home-container">
                {/* Top Banner Image with a "Shop All" button overlaid */}
                <div className="top-banner-wrap">
                    <img src={bannerImage} alt="LocalTech Banner" className="top-banner" />
                    {/* Phone-only version — shown at ≤768px (see Home.css) */}
                    <img src={bannerMobileImage} alt="" className="top-banner top-banner-mobile" />
                    <Link to="/products/all" className="top-banner-button">
                        Shop All
                    </Link>
                </div>

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
                            <img src={leftImage} alt="Computers and tech on the left" className="home-image" />
                        </div>
                        <div className="image-container">
                            <img src={middleImage} alt="PC accessories and other tech" className="home-image" />
                        </div>
                        <div className="image-container">
                            <img src={rightImage} alt="Computers and tech on the right" className="home-image" />
                        </div>
                    </div>
                </div>

                {/* Featured Products Carousel */}
                <FeaturedCarousel />

                {/* PC Repairs banner with a booking button overlaid on the middle */}
                <div className="repair-banner">
                    <img src={paletteImage} alt="PC repairs — book your PC in for service" className="home-banner" />
                    {/* Phone-only version — shown at ≤768px (see Home.css) */}
                    <img src={paletteMobileImage} alt="" className="home-banner home-banner-mobile" />
                    <Link to="/bookings" className="repair-banner-button">
                        Book Your PC In Here
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
