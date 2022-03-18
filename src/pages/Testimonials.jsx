import React, { Component } from 'react';
import "../css/Testimonials.scss";
import TestimonialsItems from '../components/TestimonialsItems';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonial" className="testimonial-section">
                <div className="testimonial-wrapper">
                    <div className="container">
                        <div className="section-header">
                            <h1 className="section-title testimonial-section-title">Testimonials</h1>
                            <p className="section-short-description testimonial-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                        </div>

                        <TestimonialsItems />
                    </div>
                </div>
            </section>
        )
    }
}
