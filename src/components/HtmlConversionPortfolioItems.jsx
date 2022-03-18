import React from 'react';
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";

const HtmlConversionPortfolioItems = () => {
    return (
        <>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image1} alt="" />
                    <h3>HtmlConversion Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a  href="#"className="p-image">
                    <img src={image2} alt="" />
                    <h3>HtmlConversion Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a  href="#"className="p-image">
                    <img src={image3} alt="" />
                    <h3>HtmlConversion Items</h3>
                </a>
            </div>
            <div className="single-item">
                <a href="#" className="p-image">
                    <img src={image4} alt="" />
                    <h3>HtmlConversion Items</h3>
                </a>
            </div>
        </>
    )
}

export default HtmlConversionPortfolioItems
