import React, { Component } from 'react'
import ContactForm from '../components/ContactForm';
import "../css/Contact.scss";

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-section">
                <div className="contact-main-wrap">
                    <div className="contact-wrap">
                        <div className="section-header">
                            <h1 className="section-title contact-section-title">Contact</h1>
                            <p className="section-short-description contact-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                        </div>
                    
                        <ContactForm />
                    </div>
                </div>
            </section>
        )
    }
}
