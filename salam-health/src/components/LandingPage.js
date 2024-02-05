// LandingPage.js

import React, { useState, useEffect } from 'react';
import LogoImage from '../images/full_logo.png';
import ContactCard from './ContactCard.js';

function LandingPage() {
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
  }, []); 

  return (
    <div className={`home-background ${startAnimation ? 'start-animation' : 'initial-hidden'}`} style={{ height: '100vh' }}>
        <div className="centered-container-no-height hidden top-margin-1 bottom-marging-1">
            <img src={LogoImage} alt="Logo"/> 
            <h3 className='home-text less-gap-2' style={{ fontSize: '40px', marginBottom: '0.5rem', textAlign: 'center' }}>
              We Are
            </h3>
            <h3 className='home-text less-gap-2' style={{ fontSize: '70px', marginTop: '0rem', textAlign: 'center' }}>
              Coming Soon
            </h3>
        </div>

        <div className='centered-container-no-height hidden'>
            <ContactCard style={{ position: 'relative', marginBottom: '2rem' }} />  
        </div>  
    </div>
  );
}

export default LandingPage;