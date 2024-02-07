// Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/logo-with-text.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/twitter.png';
import address from '../images/home-01.png';
import email from '../images/mail-01.png';
import phoneIcon from '../images/phone-icon.png';

function Footer() {
  const navigate = useNavigate(); 

  return (
    <nav className="footer">
      <div className='horizontal-stretched'>
        <div className='vertical-center'>
            <a href='/' className='footer-logo'>
              <img src={LogoImage}/>
            </a>

            <p className='white-text center'>Unlock your body's natural <br></br> healing.</p>

            <div className='horizontal'>
                <a href='https://www.instagram.com/salamhealth.co' target="_blank" rel="noopener noreferrer" className='social-media-footer'>
                  <img src={instagram} alt="Instagram" className='social-media-footer'/>
                </a>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='social-media-footer'>
                  <img src={facebook} alt="Facebook" className='social-media-footer'/>
                </a>
                <a href='https://www.whatsapp.com/' target="_blank" rel="noopener noreferrer" className='social-media-footer'>
                  <img src={whatsapp} alt="Whatsapp" className='social-media-footer'/>
                </a>
                <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer" className='social-media-footer'>
                  <img src={twitter} alt="Twitter" className='social-media-footer'/>
                </a>
            </div>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Company</p>
            <a href="/" className='footer-item'>Home</a>
            <a href="/about" className='footer-item'>About Us</a>
            <a href="/book" className='footer-item'>Book Treatment</a>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Services</p>
            <a href="/cupping-therapy" className='footer-item'>Cupping Therapy</a>
            <a href="/sports-massage" className='footer-item'>Sports Massages</a>
            <a href="/"className='footer-item'>Detox</a>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Information</p>

            <div className='footer-info-item'>
              <img src={address}/>
              <p>White Building, 1-4 Cumberland Place, <br/> Southampton SO15 2NP</p>
            </div>

            <div className='footer-info-item'>
              <img src={email}/>
              <p>info@salamhealth.co</p>
            </div>

            <div className='footer-info-item'>
              <img src={phoneIcon}/>
              <p>07459150327</p>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;