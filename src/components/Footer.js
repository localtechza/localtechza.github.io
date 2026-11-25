import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social media icons: re-add here once LocalTech has Facebook/Instagram pages */}

            {/* Footer text content */}
            <div className="footer-content">
                <p>© {new Date().getFullYear()} <strong>LocalTech</strong>. All Rights Reserved.</p>
                {/* Physical address: required by POPIA and checked by payment providers */}
                <p className="footer-address">
                    <strong>Workshop:</strong> 44 Kundalila Road, Waterfall, KZN
                </p>
                <p>
                    <strong>Contact:</strong> <a href="tel:+27816422215" className="footer-link">081 6422 215</a> |
                    <strong>Email:</strong> <a href="mailto:localtechza@gmail.com" className="footer-link">localtechza@gmail.com</a>
                </p>
                <p>
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link> |
                    <Link to="/terms" className="footer-link">Terms of Service</Link> |
                    <Link to="/returns" className="footer-link">Returns &amp; Refunds</Link> |
                    <Link to="/about" className="footer-link">About Us</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
