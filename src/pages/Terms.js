import React from "react";
import Footer from "../components/Footer";
import "../styles/Legal.css";

const Terms = () => {
    return (
        <>
            <main className="legal-page">
                <article className="legal-card">
                    <h1>Terms of Service</h1>
                    <p className="legal-updated">Last updated: 20 November 2026</p>

                    <p>
                        These terms apply when you order from LocalTech or use this website.
                        By placing an order you agree to them.
                    </p>

                    <h2>Who we are</h2>
                    <p>
                        LocalTech, 44 Kundalila Road, Waterfall, KZN. Phone:{" "}
                        <a href="tel:+27816422215">081 6422 215</a> · Email:{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>.
                    </p>

                    <h2>Products and descriptions</h2>
                    <ul>
                        <li>
                            We sell desktop PCs, laptops, mini PCs, monitors, gaming PCs, PC
                            accessories and other tech — new and refurbished.
                        </li>
                        <li>
                            Refurbished items are graded and described on their product page, and
                            specifications are listed in the product description.
                        </li>
                        <li>
                            Product images are indicative; minor cosmetic wear on refurbished
                            goods is normal and described where known.
                        </li>
                        <li>
                            Stock is subject to availability. If an item is out of stock after you
                            order, we will contact you and refund any payment made.
                        </li>
                    </ul>

                    <h2>Pricing</h2>
                    <ul>
                        <li>All prices are in South African Rands (ZAR).</li>
                        <li>
                            If a price is clearly shown in error, we may cancel the order and
                            refund you in full.
                        </li>
                    </ul>

                    <h2>Orders</h2>
                    <ul>
                        <li>
                            Your order is confirmed when we email you an invoice with your
                            invoice number.
                        </li>
                        <li>
                            We may cancel an order if the item is unavailable or payment is not
                            received, and will refund anything you have paid.
                        </li>
                    </ul>

                    <h2>Payment</h2>
                    <ul>
                        <li>
                            <strong>Card:</strong> paid securely through Paystack. We never see or
                            store your full card details.
                        </li>
                        <li>
                            <strong>EFT:</strong> pay to Capitec, account name LocalTech, account
                            1681446705, branch code 470010, using your invoice number as the
                            reference. Email proof of payment to{" "}
                            <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>.
                            EFT orders are prepared once payment reflects in our account.
                        </li>
                    </ul>

                    <h2>Delivery and collection</h2>
                    <ul>
                        <li>
                            Choose <strong>pickup from our workshop</strong> (Waterfall, KZN) or{" "}
                            <strong>courier</strong> (R120, shown at checkout) at checkout.
                        </li>
                        <li>
                            Courier delivery times are estimates, not guarantees. You are
                            responsible for giving us a correct delivery address and contact
                            number.
                        </li>
                        <li>
                            Risk in the products passes to you on delivery or collection. Please
                            inspect your order on arrival and report any damage or problem to us
                            immediately.
                        </li>
                    </ul>

                    <h2>Returns, warranty and your rights</h2>
                    <ul>
                        <li>
                            If a product is faulty, not as described, or arrives damaged, contact
                            us with your invoice number and we will sort it out — repair,
                            replacement or refund as appropriate.
                        </li>
                        <li>
                            Any warranty offered on a product is stated on its product page or
                            invoice. Warranty periods vary by product.
                        </li>
                        <li>
                            Nothing in these terms limits your rights under the Consumer
                            Protection Act 68 of 2008 or any other applicable law.
                        </li>
                        <li>
                            To return an item, contact us first at{" "}
                            <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a> or{" "}
                            <a href="tel:+27816422215">081 6422 215</a> before sending anything
                            back.
                        </li>
                    </ul>

                    <h2>Repairs and bookings</h2>
                    <ul>
                        <li>
                            For repairs, we inspect your PC first and contact you with a quote
                            before doing any chargeable work.
                        </li>
                        <li>
                            Booking payments cover courier collection and return trips for the
                            inspection. Further work is quoted separately and only proceeds with
                            your approval.
                        </li>
                    </ul>

                    <h2>Your account</h2>
                    <ul>
                        <li>
                            Sign-in is by email only — we email you a code. You are responsible
                            for activity on your account, so don't share the code.
                        </li>
                        <li>
                            Tell us immediately if you believe your account has been used without
                            your permission.
                        </li>
                    </ul>

                    <h2>Acceptable use</h2>
                    <ul>
                        <li>
                            Don't misuse the website — no attempted hacking, scraping of personal
                            information, or fraudulent orders.
                        </li>
                        <li>
                            All site content (text, logo, images) belongs to LocalTech and may
                            not be copied without permission.
                        </li>
                    </ul>

                    <h2>Limitation of liability</h2>
                    <ul>
                        <li>
                            To the extent permitted by law, we are not liable for indirect or
                            consequential losses arising from use of this website.
                        </li>
                        <li>
                            Where liability cannot be excluded by law (including under the
                            Consumer Protection Act), it is limited to the value of the relevant
                            order.
                        </li>
                    </ul>

                    <h2>Governing law</h2>
                    <p>
                        These terms are governed by the laws of the Republic of South Africa,
                        and the South African courts have jurisdiction.
                    </p>

                    <h2>Changes to these terms</h2>
                    <p>
                        We may update these terms from time to time. The "last updated" date at
                        the top shows when they last changed. Changes do not affect orders
                        already confirmed.
                    </p>

                    <h2>Contact us</h2>
                    <p>
                        Questions? Email{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a> or call{" "}
                        <a href="tel:+27816422215">081 6422 215</a> — 44 Kundalila Road,
                        Waterfall, KZN.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Terms;
