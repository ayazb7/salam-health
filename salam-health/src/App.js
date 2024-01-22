import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Book from './components/Book';
import Navbar from './components/Navbar'; // Import your new Navbar component
import LogoImage from './images/logo-with-text.png';
import './App.css';

function App() {
  // State for scroll position and navbar background color
  const [scrollY, setScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  // Function to handle scroll event
  const handleScroll = () => {
    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Update the scrollY state
    setScrollY(currentScrollY);

    // Define the threshold for background color change
    const threshold = 50; // Adjust this threshold as needed

    // Update the navbar background color based on the scroll position
    if (currentScrollY > threshold) {
      setNavbarBackground('rgba(17, 11, 39, 0.9)');
    } else {
      setNavbarBackground('transparent');
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        {/* <nav className="navbar">
          <img src={LogoImage} alt="Logo" className="logo"/>
          
          <div className="nav-item-right">
            <a href="/contact">Contact</a>
            <button className="book-now" onClick={handleButtonClick}>
              Book Now
            </button>
          </div>
        </nav> */}

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

