import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import config from '../config';
import { Link } from "react-router-dom";

const Produit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    // Effectuer la requête à l'API en utilisant l'ID du produit
    fetch(`${config.baseUrl}/produits/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id, config.baseUrl]);

  // Afficher les détails du produit
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="appProduit">
      <Navbar />
      <div className="main-container">
        <div className="platforme"> <img
          src="../logo-plateforme.png"
          alt="jeu-image"
          className="logo-platform {
            "
        /></div>

        <img src="../jeu-image.png" alt="jeu-image" className="main-image" />
        <div>
          <img src={product.photo} alt="titre" className="img-titre" />
          <div className="fiche-technique">
            <h2>{product.nom}</h2>
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
            <div className="boutonAchat">
              <Link to={`/paiement/${product.id}`}>
                <button type="button" className="btn btn-warning">
                  Acheter maintenant
                </button>
              </Link>
            </div>
            <h3>{product.prix}$</h3>
            <h4>75.99$</h4>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>À propos du jeu</h1>
        <p>
          {product.description}
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Produit;
