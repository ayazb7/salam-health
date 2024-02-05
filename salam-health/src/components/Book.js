// Book.js

import React, { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import FAQ from './FAQ.js';
import CuppingTherapy from '../images/cupping-therapy.png';
import ActiveCupping from '../images/active_cupping.png';

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
      <div className="centered-container-no-height hidden top-margin-3 bottom-marging-1">
          <h3 className="home-text less-gap-1">Our Treatments</h3>
          <p className='sub-text'>
              Take a look at our wide range of treatments and packages, specially tailored to optimize your experience, at an affordable price.
          </p>
          <h3 className="home-text" style={{ fontSize: '32px'}}>Stand Alone Treatments</h3>

          <div className='horizontal more-gap' style={{ alignItems: 'stretch'}}>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
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
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
          </div>
        </div>

        <FAQ style={{top: '55%', width:'50%'}}/>
      </div>
    </div>
  );
}

export default Book;
