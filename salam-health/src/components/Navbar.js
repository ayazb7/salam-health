// Navbar.js
import React, { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/full_logo.png';
// import { slide as Menu } from 'react-burger-menu';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function here

  const handleButtonClick = () => {
    navigate('/book'); // Navigate to /book when the button is clicked
  };

  return (
    <nav className="navbar">

      <a href='/' className='logo'>
       <img src={LogoImage} alt="Logo"/>
      </a>
      
      <div className="nav-item-right desktop-only">
        <a href="/about">About Us</a>
        <button className="book-now" onClick={handleButtonClick}>
          Book Now
        </button>
      </div>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu> */}
    </nav>
  );
}

export default Navbar;
