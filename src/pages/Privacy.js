import React from "react";
import Footer from "../components/Footer";
import "../styles/Legal.css";

const Privacy = () => {
    return (
        <>
            <main className="legal-page">
                <article className="legal-card">
                    <h1>Privacy Policy</h1>
                    <p className="legal-updated">Last updated: 20 November 2026</p>

                    <p>
                        LocalTech ("we", "us") respects your privacy. This policy explains what
                        personal information we collect, how we use it, and your rights under
                        South Africa's Protection of Personal Information Act (POPIA).
                    </p>

                    <h2>Who we are</h2>
                    <p>
                        LocalTech, 44 Kundalila Road, Waterfall, KZN. Phone:{" "}
                        <a href="tel:+27816422215">081 6422 215</a> · Email:{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a>.
                    </p>

                    <h2>Information we collect</h2>
                    <ul>
                        <li>
                            <strong>Email address</strong> — used as your account sign-in (we send
                            you a 6-digit code; there is no password).
                        </li>
                        <li>
                            <strong>Order details</strong> — name, phone number, delivery address,
                            and the products you buy, so we can process and deliver your order.
                        </li>
                        <li>
                            <strong>Order history and recently viewed products</strong> — stored on
                            your account to show your orders and remember what you looked at,
                            across devices.
                        </li>
                        <li>
                            <strong>Payment information</strong> — card payments are processed by
                            Paystack. We never see or store your full card number or CVV.
                        </li>
                        <li>
                            <strong>Messages you send us</strong> — via the contact or booking
                            forms.
                        </li>
                    </ul>

                    <h2>How we use your information</h2>
                    <ul>
                        <li>To create your account and sign you in securely.</li>
                        <li>To process, deliver and track your orders, and email you invoices.</li>
                        <li>To answer your questions and booking requests.</li>
                        <li>To comply with legal and accounting requirements (e.g. keeping invoices).</li>
                    </ul>

                    <h2>Who we share it with</h2>
                    <p>We only share what is necessary with these service providers:</p>
                    <ul>
                        <li><strong>Paystack</strong> — card payments.</li>
                        <li><strong>MongoDB</strong> — secure database hosting for accounts and orders.</li>
                        <li><strong>Resend</strong> — delivery of login codes and invoice emails.</li>
                        <li><strong>Courier companies</strong> — delivery of your order (name, address, phone).</li>
                        <li><strong>GitHub / Render</strong> — hosting of this website and our API.</li>
                    </ul>
                    <p>
                        We do <strong>not</strong> sell your personal information, and we do not
                        share it for marketing.
                    </p>

                    <h2>Where it is stored</h2>
                    <p>
                        Your information is stored in secure cloud services outside South Africa.
                        We use established providers with appropriate security measures, as
                        permitted by POPIA.
                    </p>

                    <h2>How long we keep it</h2>
                    <p>
                        While your account is active, and for as long as we are legally required
                        to keep order and invoice records. You can ask us to delete your account
                        and personal information at any time (see below).
                    </p>

                    <h2>Your rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Ask what personal information we hold about you.</li>
                        <li>Correct information that is wrong or incomplete.</li>
                        <li>Ask us to delete your personal information, where we are not required to keep it by law.</li>
                        <li>Complain about how we handled your information to the Information Regulator (South Africa): P O Box 31533, Braamfontein, Johannesburg, 2017, <a href="mailto:enquiries@inforegulator.org.za">enquiries@inforegulator.org.za</a>.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, email{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a> or call{" "}
                        <a href="tel:+27816422215">081 6422 215</a>.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        We use only what is necessary to run the site — keeping you signed in and
                        remembering your shopping cart. If web analytics are enabled, we use them
                        to understand aggregate page views; they do not identify you personally.
                    </p>

                    <h2>Security</h2>
                    <p>
                        The site runs over HTTPS (encrypted connection), passwords are never
                        stored (there are none), and access to our database is restricted and
                        authenticated.
                    </p>

                    <h2>Changes to this policy</h2>
                    <p>
                        We may update this policy from time to time. The "last updated" date at
                        the top shows when it last changed.
                    </p>

                    <h2>Contact us</h2>
                    <p>
                        Questions about this policy? Email{" "}
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

export default Privacy;
