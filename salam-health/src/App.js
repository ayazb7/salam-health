// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LogoImage from './images/Logo.png'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
          <li className="logo-container">
              {/* Use the img element for the logo with the "logo" class */}
              <img src={LogoImage} alt="Logo" className="logo" />
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
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
