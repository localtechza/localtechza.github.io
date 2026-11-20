import React, { useState } from "react";
import { BACKEND_URL } from "../config";
import { useBackendWake, WAKE_MESSAGE } from "../utils/backendWake";

const ContactForm = () => {
    // Wake the free backend as soon as this page opens, not on submit.
    useBackendWake();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage(WAKE_MESSAGE);

        try {
            const response = await fetch(`${BACKEND_URL}/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatusMessage("Failed to send message: " + result.error);
            }
        } catch (error) {
            setStatusMessage("An error occurred: " + error.message);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form">
            <h2>We would like to hear from you.</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />

                <label>Message:</label>
                <textarea name="message" value={formData.message} placeholder="Message" onChange={handleChange} required></textarea>

                <button type="submit" disabled={loading}>
                    {loading ? "Sending…" : "Send"}
                </button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
