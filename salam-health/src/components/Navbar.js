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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            
            <MyCloseSVG className="menu-mobile-only-close" onClick={handleMenuToggle}  />
            
            <a href="/about">About Us</a>
            <button className="book-now" onClick={handleButtonClick}>
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
