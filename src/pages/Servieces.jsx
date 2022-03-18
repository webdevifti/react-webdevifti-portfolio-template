import React from 'react';
import "../css/Services.scss";
import ServicesItems from '../components/ServicesItems';

const Servieces = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title service-section-title">My Services</h1>
                    <p className="section-short-description service-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                </div>

                <ServicesItems />
            </div>
        </section>
    )
}

export default Servieces
