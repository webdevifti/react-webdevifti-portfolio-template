import React from 'react'
import "../css/Banner.scss";
const Banner = () => {
    return (
        <section id="banner" className="section-banner">
            <div className="banner-wrapper">
                <div className="banner-content">
                    <h3>Hello, I am</h3>
                    <h1>webdevifti</h1>
                    {/* <h2>Alam</h2> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa?</p>
                    <button type="button" className="btn btn-download-cv">Download CV</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
