// Book.js

import React, { useState, useEffect } from 'react';
import Card from './Card'
import FAQ from './FAQ.js';
import CuppingTherapy from '../images/cupping-therapy.png';

function Book() {
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
    <div className={`home-background ${startAnimation ? 'start-animation' : 'initial-hidden'}`}>
      <div className="centered-container-no-height hidden top-margin-1 bottom-marging-1">
          <h3 className="home-text less-gap-1">Our Treatments</h3>
          <p className='sub-text'>
              Take a look at our wide range of treatments and packages, specially tailored to optimize your experience, at an affordable price.
          </p>
          <h3 className="home-text" style={{ fontSize: '32px'}}>Stand Alone Treatments</h3>

          <div className='horizontal more-gap' style={{ alignItems: 'stretch'}}>
            <Card className="cards" title= "Sports Massage" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="30" duration="30 min"/>
            <Card className="cards" title= "Active Cupping" image={CuppingTherapy} description="Strategic placement of suction cups on specific areas to stimulate blood circulation, promote lymphatic drainage, and enhance overall well-being. The gentle suction created by the cups helps release muscle tension, relieve pain, and improve flexibility. With the skilled practitioners at Salam Health ensuring a safe and comfortable session, clients can enjoy the invigorating benefits of Active Cupping Therapy for a renewed sense of vitality and improved physical wellness." price="30" duration="30 min"/>
            <Card className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="This therapy stimulates blood circulation, removes toxins, relieves muscle tension, boosts the immune system, and promotes mental well-being. With highly trained professionals ensuring a safe and sterile environment, clients can trust in the effectiveness and quality of the treatment." price="45" duration="45 min"/>
          </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue'> 
          <p className='center testimonial-title' style={{ marginBottom: '1rem'}} >
            Packages & Bundles
          </p>
          <p className='sub-text' style={{ color: 'white', paddingBottom: '2rem', width: '45vw' }}>
              Take a look at our wide range of treatments and packages, specially tailored to optimize your experience, at an affordable price.
          </p>

          <div className='horizontal more-gap' style={{ alignItems: 'stretch'}}>
            <Card className="cards" title= "Lite Detox" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="50" duration="45 min"/>
            <Card className="cards" title= "Sports Therapy" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="50" duration="1 hour"/>
            <Card className="cards" title= "Full Detox & Sports Therapy" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="70" duration="1 hour"/>
          </div>
        </div>

        <FAQ style={{top: '55%', width:'50%'}}/>
      </div>
    </div>
  );
}

export default Book;
