import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LogoImage from './images/Logo3.png';
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
        <nav className="navbar">
          <div className="nav-item-left">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
          <a href="/" className="nav-brand">
            <img src={LogoImage} alt="Logo" className="logo" />
            {/* <img src={TitleImage} alt="Title" className="title" /> */}
          </a>
          {/* <a href="/" className="nav-brand">Salam Health</a> */}
          <div className="nav-item-right">
            <a href="/contact">Contact</a>
            <div className="book-now">
              <p href="/book" className="book-now-text">Book Now</p>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

