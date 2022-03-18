import React from 'react';
import image3 from "../img/5.jpg";
import image4 from "../img/7.jpg";
import image5 from "../img/9.png";

const WordpressPortfolioItems = () => {
    return (
        <>
            <div className="single-item">
                <a href="#"className="p-image">
                    <img src={image3} alt="" />
                    <h3>Wordpress Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image4} alt="" />
                    <h3>Wordpress Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image5} alt="" />
                    <h3>Wordpress Items</h3>
                </a>
            </div>
        </>
    )
}

export default WordpressPortfolioItems
