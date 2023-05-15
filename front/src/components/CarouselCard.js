import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from './Card';

const CarouselCard = () => {
    let [tends, setTends] = useState([]);
    const fetchTends = () => {
        axios.get('http://192.168.0.52:3000/produits').then((reponse) => {
            setTends(reponse.data);
            console.log(reponse.data);
        }
        );

    }
    useEffect(fetchTends, []);
    const photos = [
        { id: 1, title: "Photo 1", url: "../card/1.png" },
        { id: 2, title: "Photo 2", url: "../card/2.png" },
        { id: 3, title: "Photo 3", url: "../card/3.png" },
        { id: 4, title: "Photo 1", url: "../card/4.png" },
        { id: 5, title: "Photo 2", url: "../card/5.png" },

    ];

    return (
        <div id="fcarouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner" style={{ height: "auto" }} >
                <div className="carousel-item active" >
                    <div className='itemsT'>

                        {tends && tends.map((tend, index) => <Card key={tend.id} title={tend.nom} imageUrl={tend.photo} />)}

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