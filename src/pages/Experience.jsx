import React, { Component } from 'react';
import '../css/Experience.scss';
import ExperienceItems from '../components/ExperienceItems'

export default class Experience extends Component {
    render() {
        return (
            <section id="experience" className="section-experience">
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title experience-section-title">My Experiences</h1>
                        <p className="section-short-description experience-section-short-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
                    </div>
                    <ExperienceItems />
                </div>
            </section>
        )
    }
}
