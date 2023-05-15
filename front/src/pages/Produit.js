import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Produit = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <img
          src="../logo-plateforme.png"
          alt="jeu-image"
          className="logo-plateforme"
        />
        <img src="../jeu-image.png" alt="jeu-image" className="main-image" />
        <div>
          <img src="../titre.png" alt="titre" className="img-titre" />
          <div className="fiche-technique">
            <h2>The Legend of Zelda: Tears of the Kingdom Switch - Europe</h2>
            <div class="notice">
              <a href="#">
                <img src="../star.png" alt="star-1" />
              </a>
              <a href="#">
                <img src="../star.png" alt="star-2" />
              </a>
              <a href="#">
                <img src="../star.png" alt="star-3" />
              </a>
              <a href="#">
                <img src="../star.png" alt="star-4" />
              </a>
              <a href="#">
                <img src="../star.png" alt="star-5" />
              </a>
            </div>
            <button type="button" class="btn btn-warning">
              Ajouter au panier
            </button>
            <h3>65.49$</h3>
            <h4>75.99$</h4>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>À propos du jeu</h1>
        <p>
          Une aventure épique à travers les terres et les cieux d'Hyrule vous
          attend dans The Legend of Zelda: Tears of the Kingdom sur Nintendo
          Switch. Créez votre propre aventure dans un monde où vous pouvez
          donner libre cours à votre imagination. Dans cette suite de The Legend
          of Zelda: Breath of the Wild, c'est à vous de décider du chemin que
          vous voulez suivre à travers les immenses terres d'Hyrule et les
          vastes cieux qui les surplombent.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Produit;
