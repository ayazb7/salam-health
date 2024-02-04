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
  }, []); // Empty dependency array ensures this effect runs once after initial render

  const textLines = [
    "Holistic well-being through our integrated therapy packages.",
    "Address various aspects of health with bundled therapies. Optimize",    
    "your experience for comprehensive care beyond isolated symptoms.",
    "Enjoy the convenience of accessing multiple therapies in one place.",
    "All at an affordable price."
  ]; 
  return (
    <div className={`home-background ${startAnimation ? 'start-animation' : 'initial-hidden'}`}>
        <div className="centered-container hidden">
             <h3 className="home-description">Packages</h3>
                <p className="packages-text">
                {textLines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                    ))}
                </p>
                
         </div>
         <section className="cards-list">
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63"/>
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63"/>
              <Card className="cards" title= "Hijamah Wet Cupping" description="HEALTH CONSULTATION , SPORTS MASSAGE , INFRARED DEEP HEAT , WET CUPPING , GRASTON THERAPY" price="63"/>
              
         </section>
            
         
         
         
    </div>
  );
}

export default Book;
