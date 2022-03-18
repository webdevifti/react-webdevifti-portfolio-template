import React from 'react';
import "../../css/Header.scss";

class Header extends React.Component{
    render(){
        return (
            <header>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">My Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
    
}

export default Header
