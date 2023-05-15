import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from './Card';
import { Link } from 'react-router-dom';

const CarouselCard = () => {
    let [tends, setTends] = useState([]);
    const fetchTends = () => {
        axios.get('http://localhost:3000/produits').then((reponse) => {
            setTends(reponse.data);
            console.log(reponse.data);
        }
        );

    }
    useEffect(fetchTends, []);


    return (
        <div id="fcarouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner" style={{ height: "auto" }} >
                <div className="carousel-item active" >
                    <div className='itemsT'>

                        {tends && tends.map((tend, index) => <Link to={`/produit/${tend.id}`} key={tend.id}><Card key={tend.id} title={tend.nom} imageUrl={tend.photo} /></Link>)}

                    </div>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#fcarouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#fcarouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselCard;