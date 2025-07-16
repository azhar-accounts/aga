import React from 'react';

export default function About() {
    return (
        <section
            className="responsive__container flex gap-16 py-16 scroll-mt-20"
            id="about-us"
        >
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800">
                    About Us
                </h2>
                <p className="m-0 text-sm leading-[20px] text-seconday">
                    At
                    <span className="mx-1 font-semibold text-black">AGA</span>
                    we're on a mission to simplify finance for individuals,
                    startups, and growing businesses. Though we're new on the
                    scene, our passion for precision, transparency, and client
                    success runs deep. <br></br>
                    <br></br>We understand that accounting isn’t just about
                    numbers—it’s about giving you clarity and confidence in your
                    financial journey. From day one, we've committed ourselves
                    to being more than just accountants. We're your partners,
                    advisors, and supporters in building something stronger.
                    <br></br>
                    <br></br>
                    Whether you're navigating tax returns, setting up
                    bookkeeping systems, or just need someone to guide you
                    through the financial side of your business, we're here to
                    help—reliably and honestly. Let’s grow together.
                </p>
            </div>
        </section>
    );
}
