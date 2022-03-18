import React from 'react';
import { FaMobileAlt, FaMapMarkerAlt, FaCogs } from "react-icons/fa";
const AboutContactInfo = () => {
    return (
        <div className="about-contact-info">
            <div className="container">
                <div className="info">
                    <div className="col-1">
                        <span><FaMobileAlt /></span>
                        <div className="inner">
                            <h3>Phone Number</h3>
                            <p>+880 19339 999 657</p>
                            <p>+880 19022 222 047</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <span><FaMapMarkerAlt /></span>
                        <div className="inner">
                            <h3>Address</h3>
                            <address>
                                1/203 Dhaka Road, 
                                Mymensingh, 2200
                            </address>
                        </div>
                    </div>
                    <div className="col-1">
                        <span><FaCogs /></span>
                        <div className="inner">
                            <h3>Email Address</h3>
                            <a href="mailto:webdevifti@gmail.com">webdevifti@gmail.com</a>
                            <a href="mailto:01iftekharalam@gmail.com">01iftekharalam@gmail.com</a>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContactInfo
