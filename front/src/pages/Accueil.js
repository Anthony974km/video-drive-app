import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';
import MutipleItemsCarousel from '../components/MultipleItemsCarousel';
import CarouselCard from '../components/CarouselCard';
import App from '../components/CheckoutForm';

const Accueil = () => {
    return (
        <div className='app'>
            <Navbar />
            <Carousel />
            <MutipleItemsCarousel />
            <b id="tend">Tendances</b>
            <CarouselCard />
            <App />
            <Footer />
        </div>
    );
};

export default Accueil;