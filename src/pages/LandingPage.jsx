import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Testimonial from '../components/Testimonial/Testimonial';
import About from '../components/About/About';
import CTA from '../components/Cta/Cta';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/Faq/Faq';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <WhyChooseUs />
                <Services />
                <CTA />
                <Testimonial />
                <Faq />
                <Footer />
            </main>
        </>
    );
}
