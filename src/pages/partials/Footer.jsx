import React, { useState } from 'react';
import "../../css/Footer.scss";
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500){
        setVisible(true)
      } 
      else if (scrolled <= 500){
        setVisible(false)
      }
    };
    
    
    window.addEventListener('scroll', toggleVisible);
   
    return (
        <>
        
        <footer className="footer-section">
            <p>copyright 2021 by webdevifti. All right reserved.</p>
            <a href="#banner" className={ visible ? 'btn-back-to-top': '' }><FaArrowUp /></a>
        </footer>
        </>
    )
}

export default Footer
