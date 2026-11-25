import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Legal.css";

// Who LocalTech is — the page payment providers and customers look for to
// check the business is real. Real details only; no claims we cannot back.
const About = () => {
    return (
        <>
            <main className="legal-page">
                <article className="legal-card">
                    <h1>About LocalTech</h1>
                    <p className="legal-updated">
                        Waterfall, KwaZulu-Natal · South Africa
                    </p>

                    <p>
                        LocalTech is a local PC workshop that sells desktop PCs, laptops, mini
                        PCs, monitors, gaming PCs and PC accessories — new and refurbished —
                        and repairs, upgrades and builds computers for people in and around
                        Waterfall.
                    </p>

                    <h2>What we do</h2>
                    <ul>
                        <li>
                            <strong>Sell computers and tech</strong> — a carefully chosen range
                            of refurbished business machines, laptops, monitors and
                            accessories, each listed with its full specification and condition
                            grade.
                        </li>
                        <li>
                            <strong>Repair and upgrade PCs</strong> — diagnostics first, then a
                            quote. We contact you with the cost before any chargeable work
                            starts, so there are no surprises.
                        </li>
                        <li>
                            <strong>Build custom PCs</strong> — built to your budget and what
                            you actually need the machine for, whether that is work, school or
                            gaming.
                        </li>
                        <li>
                            <strong>Collect and return</strong> — no time to drive to us? We
                            arrange courier collection and delivery back for repairs and
                            bookings.
                        </li>
                    </ul>

                    <h2>Why refurbished?</h2>
                    <p>
                        Every refurbished and used product is <strong>tested by us before it
                        ships</strong> — we check that it works and matches its listing before
                        it leaves the workshop.
                    </p>
                    <p>
                        Business-grade machines are built to a far higher standard than most
                        consumer hardware, and they are replaced on a short cycle by the
                        companies that buy them. That means a lot of very capable computer
                        ends up available at a fraction of its original price.
                    </p>
                    <p>
                        We grade every unit honestly and publish the full specification on the
                        product page, so you know exactly what you are getting before you buy.
                        Anything with a warranty says so on its page and on your invoice.
                    </p>

                    <h2>How we work</h2>
                    <ol>
                        <li>
                            You order online, or contact us about a repair or booking.
                        </li>
                        <li>
                            We confirm by email with an invoice and your invoice number.
                        </li>
                        <li>
                            For repairs, we inspect first and quote before doing any chargeable
                            work.
                        </li>
                        <li>
                            Collect from our workshop in Waterfall, or have it couriered to you.
                        </li>
                    </ol>

                    <h2>Where we are</h2>
                    <p>
                        <strong>Workshop:</strong> 44 Kundalila Road, Waterfall, KZN
                        <br />
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+27816422215">081 6422 215</a>
                        <br />
                        <strong>Email:</strong>{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>
                    </p>
                    <p>
                        Drop off at the workshop during opening hours, or choose courier
                        collection when you book a repair.
                    </p>

                    <h2>Buying from us</h2>
                    <ul>
                        <li>
                            <strong>Delivery is free on every order</strong> — pickup from our
                            workshop, or free courier straight to your door.
                        </li>
                        <li>
                            Pay by EFT — see <Link to="/terms">Terms of Service</Link> for the
                            account details. Card payments are coming soon.
                        </li>
                        <li>
                            Changed your mind or something wrong? Read our{" "}
                            <Link to="/returns">Returns &amp; Refunds</Link> policy.
                        </li>
                        <li>
                            How we handle your information is explained in our{" "}
                            <Link to="/privacy">Privacy Policy</Link>.
                        </li>
                    </ul>

                    <h2>Talk to us</h2>
                    <p>
                        Email <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>{" "}
                        or call <a href="tel:+27816422215">081 6422 215</a>. We would rather
                        answer a question before you buy than have you order the wrong thing.
                    </p>
                    <p>
                        <Link to="/contact">Contact us →</Link> &nbsp;·&nbsp;{" "}
                        <Link to="/bookings">Book a repair →</Link>
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default About;
