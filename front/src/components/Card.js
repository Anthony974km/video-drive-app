import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
import Produit from "../pages/Produit";

const Card = (props) => {
  return (
    <Link to={`/produit/`}>
      <div className="card">
        <div class="image-container">
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className="card-body">
          <b className="card-text">{props.title}</b>
        </div>
      </div>
    </Link>
  );
};

export default Card;
