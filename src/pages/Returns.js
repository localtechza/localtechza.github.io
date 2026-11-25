import React from "react";
import Footer from "../components/Footer";
import "../styles/Legal.css";

// Standalone returns policy — payment gateways look for this as its own page
// rather than buried inside the Terms. The substance matches Terms.js so the
// two can never contradict each other.
const Returns = () => {
    return (
        <>
            <main className="legal-page">
                <article className="legal-card">
                    <h1>Returns &amp; Refunds</h1>
                    <p className="legal-updated">Last updated: 25 November 2026</p>

                    <p>
                        We want you to be happy with what you bought. If something is wrong,
                        tell us and we will put it right. This page explains how.
                    </p>

                    <h2>How to start a return</h2>
                    <ol>
                        <li>
                            Email{" "}
                            <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a> or
                            call <a href="tel:+27816422215">081 6422 215</a> with your{" "}
                            <strong>invoice number</strong>.
                        </li>
                        <li>
                            Tell us what is wrong with the item. Photos help us resolve it
                            faster.
                        </li>
                        <li>
                            We will reply with the next step — repair, replacement or refund.
                        </li>
                    </ol>
                    <p>
                        <strong>Please do not send anything back before you hear from us.</strong>{" "}
                        Unannounced parcels can get lost, and we want to make sure your return
                        reaches us safely.
                    </p>

                    <h2>If the item is faulty, not as described, or arrives damaged</h2>
                    <ul>
                        <li>
                            Contact us as soon as you notice the problem and we will sort it
                            out — <strong>repair, replacement or refund</strong>, whichever is
                            appropriate.
                        </li>
                        <li>
                            We cover the cost of returning an item to us when it is faulty, not
                            as described, or was damaged in delivery.
                        </li>
                        <li>
                            Refunds are paid back to the account or card you originally paid
                            with, normally within a few working days of us receiving the item.
                        </li>
                    </ul>

                    <h2>Refurbished items</h2>
                    <ul>
                        <li>
                            <strong>Every refurbished and used product is tested by us before
                            it ships.</strong> We check it is working and as described before
                            it is packed — nothing goes out untested.
                        </li>
                        <li>
                            Every refurbished product is graded and described on its product
                            page, with the full specification listed.
                        </li>
                        <li>
                            Cosmetic wear consistent with the stated grade — light scuffs,
                            minor marks — is normal for refurbished stock and is not a fault.
                        </li>
                        <li>
                            If an item arrives in a materially worse condition than its
                            product page states, that is "not as described" and the section
                            above applies.
                        </li>
                    </ul>

                    <h2>What we cannot accept</h2>
                    <ul>
                        <li>
                            Items that have been opened, tampered with or damaged after
                            delivery, unless they are faulty.
                        </li>
                        <li>
                            Software, licence keys or personalised goods once activated or
                            supplied.
                        </li>
                        <li>
                            Returns sent back without contacting us first — contact us first and
                            we will always work it out with you.
                        </li>
                    </ul>

                    <h2>Warranty</h2>
                    <ul>
                        <li>
                            Any warranty offered on a product is stated on its product page and
                            on your invoice. Warranty periods vary by product.
                        </li>
                        <li>
                            A warranty covers manufacturing faults under normal use. It does
                            not cover accidental damage, liquid damage, or unauthorised repair.
                        </li>
                    </ul>

                    <h2>Booking and repair payments</h2>
                    <ul>
                        <li>
                            Booking payments cover the courier collection and return trips for
                            the inspection of your PC.
                        </li>
                        <li>
                            We inspect first and contact you with a quote before doing any
                            chargeable work. Nothing extra is done without your approval.
                        </li>
                        <li>
                            If we cannot fix the problem, the booking payment is refunded.
                        </li>
                    </ul>

                    <h2>Your rights under South African law</h2>
                    <p>
                        Nothing here limits your rights under the{" "}
                        <strong>Consumer Protection Act 68 of 2008</strong> or any other
                        applicable law. Where the Act gives you a right we have not spelled
                        out on this page, the Act applies.
                    </p>

                    <h2>Changes to this policy</h2>
                    <p>
                        We may update this page from time to time. The "last updated" date at
                        the top shows when it last changed. Changes do not affect returns
                        already in progress.
                    </p>

                    <h2>Contact us</h2>
                    <p>
                        Questions about a return? Email{" "}
                        <a href="mailto:localtechza@gmail.com">localtechza@gmail.com</a> or
                        call <a href="tel:+27816422215">081 6422 215</a> — 44 Kundalila Road,
                        Waterfall, KZN.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default Returns;
