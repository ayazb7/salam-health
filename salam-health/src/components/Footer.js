// Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/logo-with-text.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/twitter.png';

function Footer() {
  const navigate = useNavigate(); // Initialize the navigate function here

  const handleButtonClick = () => {
    navigate('/book'); // Navigate to /book when the button is clicked
  };

  return (
    <nav className="footer">
      <div className='horizontal-stretched'>
        <div className='vertical-center'>
            <img src={LogoImage} className='footer-logo'/>

            <p className='white-text center'>Unlock your body's natural <br></br> healing.</p>

            <div className='horizontal'>
                <img src={instagram} className='social-media-footer'/>
                <img src={facebook} className='social-media-footer'/>
                <img src={whatsapp} className='social-media-footer'/>
                <img src={twitter} className='social-media-footer'/>
            </div>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Company</p>
            <p className='footer-item'>Home</p>
            <p className='footer-item'>About Us</p>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Services</p>
            <p className='footer-item'>Hijamah</p>
            <p className='footer-item'>Sports Therapy</p>
            <p className='footer-item'>Detox</p>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Information</p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;