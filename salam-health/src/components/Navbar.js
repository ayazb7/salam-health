// Navbar.js
import React, { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/full_logo.png';
import MobileLogo from '../images/Logo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as MySVG } from '../menu.svg';
import { ReactComponent as MyCloseSVG } from '../close.svg';
// import { slide as Menu } from 'react-burger-menu';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [CloseisClicked, setCloseIsClicked] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleButtonClick = () => {
    navigate('/book'); // Navigate to /book when the button is clicked
  };

  return (
    <nav className="navbar">

      <a href='/' className='logo desktop-only'>
       <img src={LogoImage} alt="Logo"/>
      </a>

      <a href='/' className='logo mobile-only'>
       <img src={MobileLogo} alt="Logo"/>
      </a>
      
      <div className="nav-item-right desktop-only">
        <a href="/about">About Us</a>
        <button className="book-now" onClick={handleButtonClick}>
          Book Now
        </button>
        
      </div>
      <MySVG className={`menu-mobile-only ${isClicked ? 'clicked' : ''}`} onClick={()=>{setIsClicked(prevState => !prevState); handleMenuToggle(); }}  />
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      className="burger-menu"
      initial={{ opacity: 0, x: '100%' }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }} // Slide to the center
      exit={{ opacity: 0, x: '100%' }} // Slide out to the right
      transition={{ duration: 0.3 }}
    >
      
      <a className='top-margin-1' href="/about">About Us</a>
      <a href="/cupping-therapy">Cupping Therapy</a>
      <a href="/sports-message">Sports Massage</a>
      <a href="/detox">Detox</a>
      <button className="menu-book-now" onClick={handleButtonClick}>
          Book Now
      </button>
      
      </motion.div>
      )}
    </AnimatePresence>
    </nav>
  );
}

export default Navbar;
