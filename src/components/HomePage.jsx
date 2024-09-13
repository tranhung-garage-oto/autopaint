import React from 'react';
import Hero from './Home/Hero/Hero';
import Features from './Home/Features/Features';
import Testimonials from './Home/Testimonials/Testimonials';
import Footer from './Home/Footer/Footer';
const HomePage = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default HomePage