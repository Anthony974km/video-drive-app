
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from '../components/Carousel';
import MutipleItemsCarousel from '../components/MultipleItemsCarousel';
import CarouselCard from '../components/CarouselCard';
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Accueil = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Récupérer le paramètre "redirect_status" de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const redirectStatus = urlParams.get("redirect_status");

        // Vérifier si le statut de redirection est "succeeded"
        if (redirectStatus === "succeeded") {
            // Afficher le modal de confirmation
            setShowModal(true);
        }
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className='app'>
            <Navbar />
            <Carousel />
            <MutipleItemsCarousel />
            <b id="tend">Tendances</b>
            <CarouselCard />

            <Footer />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation de paiement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Votre paiement a été effectué avec succès.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Accueil;