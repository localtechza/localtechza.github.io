import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer";
import "../styles/Services.css";
import cleanerImage from "../assets/cleaner.webp"; // Import image (you can update this if necessary)

const Services = () => {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <>
            <main className="services-container">
                <h1>Our Services</h1>

                <div className="services-content">
                    {/* Text Section */}
                    <div className="services-text">
                        <h2>PC Repairs & Diagnostics</h2>
                        <p>
                            Slow, crashing or just not working? We'll find out exactly what's wrong with
                            your desktop or laptop and explain your options clearly before any work begins.
                            No jargon, no pressure.
                        </p>

                        <h2>Upgrades</h2>
                        <p>
                            Give your PC a new lease on life. We fit and configure RAM, SSDs, graphics
                            cards, power supplies and more — often at a fraction of the cost of a new
                            machine.
                        </p>

                        <h2>Custom PC Builds</h2>
                        <p>
                            Tell us what you need your PC for — gaming, work, editing or everyday use —
                            and we'll build a machine around your budget. Every build is assembled,
                            cable-managed, stress-tested and delivered ready to go.
                        </p>

                        <h2>Data Transfer & Setup</h2>
                        <p>
                            Moving to a new computer? We'll move your files, photos, emails and
                            settings across, get your software installed and make sure everything is
                            working before you take it home.
                        </p>

                        <h2>Virus & Malware Removal</h2>
                        <p>
                            Pop-ups, strange toolbars or a PC that won't behave? We clean infections,
                            lock down your security and help you keep it that way.
                        </p>

                        <ul>
                            <li>✔ Clear quote before any work is done</li>
                            <li>✔ Local, friendly support you can talk to</li>
                            <li>✔ Most repairs completed within 24–48 hours</li>
                            <li>✔ All work tested before it leaves us</li>
                        </ul>

                        {/* Bookings Button */}
                        <button className="contact-button" onClick={() => navigate("/bookings")}>
                            Book Your PC In Here
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="services-image">
                        <img src={cleanerImage} alt="PC service and repair" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
