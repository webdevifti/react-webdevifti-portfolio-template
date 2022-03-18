import React from 'react';
import image3 from "../img/10.jpg";
import image4 from "../img/11.jpg";
import image5 from "../img/12.png";

const PhpPortfolioItems = () => {
    return (
        <>
            <div className="single-item">
                <a  href="#"className="p-image">
                    <img src={image3} alt="" />
                    <h3>Php Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image4} alt="" />
                    <h3>Php Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image5} alt="" />
                    <h3>Php Items</h3>
                </a>
            </div>
        </>
    )
}

export default PhpPortfolioItems
