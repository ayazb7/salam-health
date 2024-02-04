// Book.js

import React, { useState, useEffect } from 'react';
import Card from './Card'

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
    <div className="centered-container hidden">
        <h3 className="book-description">Our Treatments</h3>
        <p className='bookText'>
            Take a look at our wide range of treatments and packages, specially <br></br>
            tailored to optimize your experience, at an affordable price.
        </p>
        <h3 className="book-description2">Stand Alone Treatments</h3>
        <p className="packages-text">
        </p>
        <section className="cards-list">
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63" duration="45 min"/>
         </section>
    </div>

    <div className='centered-container hidden'>
    </div>
</div>
  );
}

export default Book;
