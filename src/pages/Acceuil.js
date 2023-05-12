import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const acceuil = () => {
    return (
        <div className='app'>
            <Navbar />
            <h1>Acceuil</h1>
            <Footer />
        </div>
    );
};

export default acceuil;