import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const MutipleItemsCarousel = () => {
    return (
        <div id="mcarouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner" style={{ height: "auto" }} >
                <div className="carousel-item active" >
                    <div className='items'>
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/xboxx.png" alt="zelda" />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/ps5.png" alt="..." />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/ps4.png" alt="zelda" />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/switch.png" alt="..." />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/xboxx.png" alt="zelda" />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/xboxone.png" alt="..." />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='items'>
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/ps3.png" alt="..." />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/xbox360.png" alt="..." />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/wiiu.png" alt="zelda" />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/3ds.png" alt="..." />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/ds.png" alt="zelda" />
                        <img src="https://www.gamecash.fr/skins/gamecash-model/brands/xboxx.png" alt="..." />
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#mcarouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mcarouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MutipleItemsCarousel;