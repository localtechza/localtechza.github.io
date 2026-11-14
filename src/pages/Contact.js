import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <>            
            <main className="contact-container">
                <h1>Contact Us</h1>

                {/* Direct contact details */}
                <div className="contact-details">
                    <p>
                        <strong>Phone / WhatsApp:</strong>{" "}
                        <a href="tel:+27816422215">081 6422 215</a>
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>
                    </p>
                </div>

                <ContactForm />
            </main>
            <Footer />
        </>
    );
};

export default Contact;
