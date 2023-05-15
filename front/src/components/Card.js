import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Card = (props) => {

    return (
        <div className="card" >
            <img src={props.imageUrl} alt={props.title} />
            <div className="card-body">
                <b className="card-text">{props.title}</b>
            </div>
        </div>
    );
};

export default Card;