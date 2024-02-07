// Book.js

import React, { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import FAQ from './FAQ.js';
import SportsMassage from '../images/sports_massage.png';
import CuppingTherapy from '../images/cupping-therapy.png';
import ActiveCupping from '../images/active_cupping2.png';
import LiteDetox from '../images/lite_detox.png';
import FullDetox from '../images/full_detox.png';

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
      <div className="centered-container hidden top-margin-3 bottom-marging-1 mobile-no-height">
          <h3 className="home-text less-gap-1">Our Treatments</h3>
          <p className='sub-text'>
              Take a look at our wide range of treatments and packages, specially tailored to optimize your experience, at an affordable price.
          </p>
          <h3 className="home-text" style={{ fontSize: '32px'}}>Stand Alone Treatments</h3>

          <div className='horizontal column more-gap' style={{ alignItems: 'stretch'}}>
            <BookingCard className="cards" title= "Sports Massage" image={SportsMassage} description="Unlock your full potential and embrace a pain-free, active lifestyle with our transformative sports massage therapy, designed to nurture your body, mind, and spirit." price="30" duration="30 min" learnMorePath="/sports-massage"/>
            <BookingCard className="cards" title= "Active Cupping" image={ActiveCupping} description="Combines cupping therapy with physical movement or exercise to target specific areas, enhance blood flow, and improve muscle recovery and flexibility." price="30" duration="30 min" learnMorePath="/cupping-therapy"/>
            <BookingCard className="cards" title= "Hijamah Wet Cupping" image={CuppingTherapy} description="The process of using suction cups on the skin to draw out a small amount of blood, promoting detoxification and stimulating healing." price="45" duration="45 min" learnMorePath="/cupping-therapy"/>
          </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue' style={{ height: '77.5vh' }}> 
          <p className='center testimonial-title' style={{ marginBottom: '1rem'}} >
            Packages & Bundles
          </p>
          <p className='sub-text' style={{ color: 'white', paddingBottom: '2rem', width: '45vw' }}>
              Take a look at our wide range of treatments and packages, specially tailored to optimize your experience, at an affordable price.
          </p>

          <div className='horizontal column more-gap' style={{ alignItems: 'stretch'}}>
            <BookingCard className="cards" title= "Lite Detox" image={LiteDetox} description={["Consultation", "Infrared Deep Tissue Heat", "Hijama Wet Cupping"]} price="45" duration="45 min" style={{ height: '90%' }}/>
            <BookingCard className="cards" title= "Full Detox & Sports Therapy" image={FullDetox} description={["Consultation", "Sports Massage", "Infrared Deep Tissue Heat", "Hijama Wet Cupping"]} price="70" duration="1 hour" style={{ height: '90%' }}/>
          </div>
        </div>

        <FAQ style={{top: '55%', width:'50%'}}/>
      </div>
    </div>
  );
}

export default Book;
