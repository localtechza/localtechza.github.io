import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Bookings.css";
import Footer from "../components/Footer";
import { BACKEND_URL } from "../config";
import { useCart } from "../context/CartContext";

// ================= courier pricing =================
// We currently charge for the courier only: 2 trips (collection + delivery back).
// Any further repair work is quoted after we inspect the PC on arrival.
const COURIER_TRIP_PRICE = 120;
const COURIER_TOTAL = COURIER_TRIP_PRICE * 2; // R240.00

const Bookings = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [formData, setFormData] = useState({
        service: "PC Repair & Diagnostics",
        date: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    });

    // "courier" = send it to us (charged) | "dropoff" = bring it in personally (free)
    const [deliveryMethod, setDeliveryMethod] = useState("courier");

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Open the calendar no matter where the client clicks in the date field
    // (not just the little calendar icon). Works on desktop and mobile.
    const openDatePicker = (e) => {
        const input = e.target;
        if (typeof input.showPicker === "function") {
            try {
                input.showPicker();
            } catch (err) {
                // Older browsers: falling back to the normal focus behaviour
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ============ COURIER: pay at checkout ============
        if (deliveryMethod === "courier") {
            // Put the service (with all the booking details) into the cart
            // and take the client straight to checkout to pay the courier charge.
            // The booking details travel with the cart item and appear on the
            // invoice email that goes to both the client and us.
            addToCart({
                id: `service-${Date.now()}`,
                title: `PC Service Booking — ${formData.service} (courier collection & return)`,
                price: COURIER_TOTAL,
                quantity: 1,
                booking: {
                    service: formData.service,
                    date: formData.date,
                    phone: formData.phone,
                    address: formData.address,
                    notes: formData.notes,
                    delivery: "courier",
                },
            });

            navigate("/checkout", {
                state: {
                    fromBooking: true,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                },
            });
            return;
        }

        // ============ DROP-OFF: free, submit the booking as before ============
        setLoading(true);
        setStatusMessage("Submitting booking... Please wait");

        try {
            const response = await fetch(`${BACKEND_URL}/book-service`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, delivery: "dropoff" }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage("Booking request sent successfully! We'll be in touch to confirm your drop-off.");
                setFormData({
                    service: "PC Repair & Diagnostics",
                    date: "",
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    notes: "",
                });
            } else {
                setStatusMessage("Failed to send booking request: " + result.error);
            }
        } catch (error) {
            setStatusMessage("An error occurred: " + error.message);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bookings-container">
            <h1>Book Your PC In for Service</h1>
            <form onSubmit={handleSubmit}>
                <label>Choose a Service:</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="PC Repair & Diagnostics">PC Repair &amp; Diagnostics</option>
                    <option value="Virus & Malware Removal">Virus &amp; Malware Removal</option>
                    <option value="PC Upgrade">PC Upgrade (RAM, SSD, Graphics Card, etc.)</option>
                    <option value="Custom PC Build">Custom PC Build</option>
                    <option value="Data Transfer & Setup">Data Transfer &amp; Setup</option>
                    <option value="Other (Specify in Special Notes)">Other (Specify in Special Notes)</option>
                </select>

                <label>Select a Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onClick={openDatePicker}
                    onFocus={openDatePicker}
                    required
                />

                <label>Your Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                {/* ============ Delivery choice ============ */}
                <label>How would you like to get your PC to us?</label>
                <div className="delivery-options">
                    <label
                        className={`delivery-option${deliveryMethod === "courier" ? " active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="deliveryMethod"
                            value="courier"
                            checked={deliveryMethod === "courier"}
                            onChange={() => setDeliveryMethod("courier")}
                        />
                        <span className="option-text">
                            <span className="option-title">Send it to us by courier</span>
                            <span className="option-detail">We collect your PC and deliver it back — 2 trips</span>
                        </span>
                        <span className="option-price">R{COURIER_TOTAL.toFixed(2)}</span>
                    </label>

                    <label
                        className={`delivery-option${deliveryMethod === "dropoff" ? " active" : ""}`}
                    >
                        <input
                            type="radio"
                            name="deliveryMethod"
                            value="dropoff"
                            checked={deliveryMethod === "dropoff"}
                            onChange={() => setDeliveryMethod("dropoff")}
                        />
                        <span className="option-text">
                            <span className="option-title">Drop it off personally</span>
                            <span className="option-detail">For local clients — bring it to our workshop</span>
                        </span>
                        <span className="option-price">Free</span>
                    </label>
                </div>

                {/* ============ What the charge is, and what for ============ */}
                <div className="booking-price-summary">
                    {deliveryMethod === "courier" ? (
                        <>
                            <h3>Charge: R{COURIER_TOTAL.toFixed(2)}</h3>
                            <p>
                                <strong>What it's for:</strong> Courier collection and return — 2 trips at
                                R{COURIER_TRIP_PRICE.toFixed(2)} each. We collect your PC from you, carry
                                out the service, and deliver it back to your door.
                            </p>
                            <p>
                                <strong>Good to know:</strong> We inspect your PC on arrival and will quote
                                you for any parts or extra repair work <em>before</em> we do it — you approve
                                any further charges separately.
                            </p>
                            <p>You'll continue to checkout now to pay this charge securely.</p>
                        </>
                    ) : (
                        <>
                            <h3>Charge: Free</h3>
                            <p>
                                <strong>What it's for:</strong> Nothing — local clients can drop their PC
                                off at our workshop in person at no cost.
                            </p>
                            <p>
                                Any parts or repair work will be quoted after we inspect your PC.
                            </p>
                        </>
                    )}
                </div>

                <label>
                    {deliveryMethod === "courier"
                        ? "Collection Address (where we should collect the PC):"
                        : "Drop-off Address (or let us know where and when to expect you):"}
                </label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label>Tell us about the problem:</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="e.g. PC won't start, blue screen, slow, upgrade wanted..."></textarea>

                <button type="submit" disabled={loading}>
                    {loading
                        ? "Submitting..."
                        : deliveryMethod === "courier"
                            ? `Continue to Checkout — Pay R${COURIER_TOTAL.toFixed(2)}`
                            : "Submit Booking (No Charge)"}
                </button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
            <Footer />
        </div>

    );
};

export default Bookings;
