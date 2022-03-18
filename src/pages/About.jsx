import React, { Component } from 'react';

import img1 from "../img/me2.png";
import "../css/About.scss";
import SkillsItems from '../components/SkillsItems';
import AboutContactInfo from '../components/AboutContactInfo';
export default class About extends Component {
    render() {
        return (
            <section id="about" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="left-content">
                            <h1>Eftekhar Alam</h1>
                            <span>Web Developer</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsa dignissimos saepe. Obcaecati odit voluptatum debitis ratione unde sunt quia?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsa dignissimos saepe. Obcaecati odit voluptatum debitis ratione unde sunt quia?</p>
                        </div>
                        <div className="middle-content">
                            <img src={img1} alt="" />
                        </div>
                        <div className="right-content">
                            <SkillsItems />
                        </div>
                    </div>
                </div>

                <AboutContactInfo />
            </section>
        )
    }
}
