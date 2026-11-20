import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social media icons: re-add here once LocalTech has Facebook/Instagram pages */}

            {/* Footer text content */}
            <div className="footer-content">
                <p>© {new Date().getFullYear()} <strong>LocalTech</strong>. All Rights Reserved.</p>
                <p>
                    <strong>Contact:</strong> <a href="tel:+27816422215" className="footer-link">081 6422 215</a> |
                    <strong>Email:</strong> <a href="mailto:localtechza@gmail.com" className="footer-link">localtechza@gmail.com</a>
                </p>
                <p>
                    <a href="#/privacy" className="footer-link">Privacy Policy</a> |
                    <a href="#/terms" className="footer-link">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
