import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social media icons on the left */}
            {/* TODO: Replace the href="#" links below with your LocalTech social media pages */}
            <div className="footer-left">
                <ul className="example-2">
                    <li className="icon-content">
                        <a href="#" target="_blank" rel="noopener noreferrer" data-social="facebook">
                            <span className="tooltip">Facebook</span>
                            <span className="filled"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0ZM12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm1 9h-1V8h1V6h-2c-1 0-2 1-2 2v2H8v2h2v5h2v-5h1l1-2h-2V9h1v2Z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="icon-content">
                        <a href="#" target="_blank" rel="noopener noreferrer" data-social="instagram">
                            <span className="tooltip">Instagram</span>
                            <span className="filled"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5ZM8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Footer text content */}
            <div className="footer-content">
                <p>© {new Date().getFullYear()} <strong>LocalTech</strong>. All Rights Reserved.</p>
                <p>
                    <strong>Contact:</strong> <a href="tel:+27816422215" className="footer-link">081 6422 215</a> |
                    <strong>Email:</strong> <a href="mailto:localtechza@gmail.com" className="footer-link">localtechza@gmail.com</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
