// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/full_logo.png';

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
      
      <div className="nav-item-right">
        <a href="/about">About Us</a>
        <button className="book-now" onClick={handleButtonClick}>
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
