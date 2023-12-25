// Home.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import CuppingImage from '../images/Salam Health Cupping.webp';
import MassageImage from '../images/Salam Health Massage.webp';
import GrastonImage from '../images/graston.webp';

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 350);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on component unmount
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className={`home-background ${startAnimation ? 'start-animation' : 'initial-hidden'}`}>
      <div className="centered-container hidden">

        <h3 className="home-description">
          Holistic healing and natural therapies
        </h3>
        <h3 className="home-description-bottom">
          specially tailored just for you.
        </h3>

        <div className="images">
          <img src={CuppingImage} alt="Cupping" className="home-image" />
          <img src={MassageImage} alt="Massage" className="home-image" />
          <img src={GrastonImage} alt="Graston" className="home-image" />
        </div>

        <h5 className="book-text">
          Book your free health consultation
        </h5>

        <div className="book-now-button">
          <p href="/book" className="book-now-text">Book Now</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
