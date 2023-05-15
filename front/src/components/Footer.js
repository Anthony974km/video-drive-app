import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Footer = () => {
  return (
    <footer
      className="bg-body-secondary text-center text-lg-start"
      data-bs-theme="dark"
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">À propos de nous</h5>
            <p>34, rue de la Clinique, Commerce n°5,</p>
            <p>Rés.les Colonies, BP167, 97492 Ste Clotilde Cédex</p>
          </div>
          <div className="text-center col-lg-3 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase">Liens utiles</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/*" className="text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  À propos
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="rowSocial">
            <h5 className="text-uppercase p-3">Suivez-nous</h5>
            <div className="social-media">
              <a href="https://www.facebook.com/VIDEODRIVE974/timeline/?ref=hl" className="facebook">
                <img id="facebook" src="../facebook.png" />
              </a>
              <a href="https://www.youtube.com/c/VIDEODRIVE974" className="youtube">
                <img id="youtube" src="../youtube.png" />
              </a>
              <a href="https://twitter.com/videodrive974" className="twitter">
                <img id="twitter" src="../twitter.png" />
              </a>
              <a href="https://www.instagram.com/videodrive974/" className="insta">
                <img id="insta" src="../insta.png" />
              </a>
              <a href="https://www.tiktok.com/@videodrive974" className="tiktok">
                <img id="tiktok" src="../tiktok.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-body-tertiary">
        © 2023 VideoDrive - Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
