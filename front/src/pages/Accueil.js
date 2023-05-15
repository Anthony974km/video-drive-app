import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';
import MutipleItemsCarousel from '../components/MultipleItemsCarousel';
import CarouselCard from '../components/CarouselCard';

const Accueil = () => {
    return (
        <div className='app'>
            <Navbar />
            <Carousel />
            <MutipleItemsCarousel />
            <b id="tend">Tendances</b>
            <CarouselCard />
            <Footer />
        </div>
    );
};

export default Accueil;