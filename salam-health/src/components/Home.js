// Home.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import CuppingImage from '../images/CuppingImage.png';
import GroupImages from '../images/GroupImages.png';
import GroupImages2 from '../images/GroupImages2.png';
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

        <img src={GroupImages2} className="plus-imagetop"/>

        <h3 className="home-description">
          Specialised Therapeutic
        </h3>
        <h3 className="home-description2">
          Treatments
        </h3>
        {/* <h3 className="home-description-bottom">
          specially tailored just for you.
        </h3> */}

         <img src={CuppingImage} className="cuppingImage"/>

        <h5 className="book-text">
          Book your free health consultation
        </h5>

        <img src={GroupImages} className="plus-image1"/>

        {/* <img src={Group} className="plus-image"/> */}

        {/* <div className="book-now-button">
          <p href="/book" className="book-now-text">Book Now</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
