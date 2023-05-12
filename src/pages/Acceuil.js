import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';
import MutipleItemsCarousel from '../components/MultipleItemsCarousel';

const acceuil = () => {
    return (
        <div className='app'>
            <Navbar />
            <Carousel />
            <MutipleItemsCarousel />
            <Footer />
        </div>
    );
};

export default acceuil;