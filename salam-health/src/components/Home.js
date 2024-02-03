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
      <div className="overlay"></div>
        <img src={GroupImages2} className="plus-imagetop"/>

        <div className='vertical-start'>
          <div className='home-text'>
            <h3>
              Specialised Therapeutic
            </h3>
            <h3>
              Treatments
            </h3>
          </div>
          <div className='home-descriptions'>
            <p>We offer a wide range of treatments</p>
            <p>based on natural therapies and</p>
            <p>holistic healing.</p>
          </div>
        </div>


        <img src={CuppingImage} className="cuppingImage"/>

        <h5 className="book-text">
          Book your free health consultation
        </h5>

        <img src={GroupImages} className="plus-image1"/>

      </div>
    </div>
  );
};

export default Home;
