// Navbar.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoImage from '../images/full_logo.png';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function here

  const handleButtonClick = () => {
    navigate('/book'); // Navigate to /book when the button is clicked
  };

  return (
    <nav className="navbar">
      <Link to="/" className='logo'>
        <img src={LogoImage} alt="Logo"/>
      </Link>
      
      <div className="nav-item-right">
        <a href="/contact">Contact</a>
        <button className="book-now" onClick={handleButtonClick}>
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
