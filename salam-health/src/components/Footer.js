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
            <a href="/" className='footer-item'>Home</a>
            <a href="/about" className='footer-item'>About Us</a>
            <a href="/book" className='footer-item'>Book Treatment</a>
        </div>

        <div className='vertical-start'>
            <p className='footer-header'>Services</p>
            <a href="/" className='footer-item'>Cupping Therapy</a>
            <a href="/" className='footer-item'>Sports Massages</a>
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