import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';
import MutipleItemsCarousel from '../components/MultipleItemsCarousel';
import Card from '../components/Card';

const Accueil = () => {
    return (
        <div className='app'>
            <Navbar />
            <Carousel />
            <MutipleItemsCarousel />
            <Card />
            <Footer />
        </div>
    );
};

export default Accueil;