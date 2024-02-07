// CuppingTherapy.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import cuppingTherapy from '../images/cupping-therapy.png';
import ContactCard from './ContactCard';
import TreatmentCard from './TreatmentCard';

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
      <div className="centered-container-no-height hidden top-margin-3">
        <div className='vertical-center'>
            <h3 className='home-text less-gap-1'>
              Cupping Therapy
            </h3>
            <p className='sub-text'>Learn more about the ancient therapeutic benefits of cupping and its various forms.</p>
        </div>

        <img src={cuppingTherapy} className='cupping-therapy-image'/>

        <p className='treatment-description no-top-margin'>With a history dating back thousands of years, cupping involves placing specialized cups on the skin to create suction, enhancing blood circulation, releasing muscle tension, and promoting overall wellness. Our skilled practitioners utilize cupping to address a variety of ailments. It can provide relief from pain, including muscular and joint discomfort, improve respiratory conditions like asthma and bronchitis, promote relaxation and stress reduction, aid in digestion, and support detoxification. At Salam Health, we prioritize hygiene and provide a safe and comfortable environment for your cupping treatment. Experience the profound benefits of this time-honored therapy and embark on a journey towards improved health and well-being with us.</p>
        <p className='treatment-description bottom-marging-1'>HIJAMA, derived from the Arabic word "hajm" meaning "sucking," is an ancient therapeutic technique that has been practiced for centuries in various cultures. It involves placing cups on specific points of the body and creating a vacuum to draw out impurities, stagnant blood, and toxins.</p>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue' style={{ height: '70vh', justifyContent: 'center' }}> 
          <p className='center testimonial-title cupping' style={{ paddingBottom: '2rem'}}>
            Types of Cupping
          </p>

          <div className='horizontal column more-gap' style={{ alignItems: 'stretch'}} >
            <TreatmentCard name="Wet Cupping" image={cuppingTherapy} info="The process of using suction cups on the skin to draw out a small amount of blood, promoting detoxification and stimulating healing."/>
            <TreatmentCard name="Dry Cupping" image={cuppingTherapy} info="Suction cups applied to specific areas of the body to relieve muscle tension, improve blood flow, and promote relaxation."/>
            <TreatmentCard name="Active Cupping" image={cuppingTherapy} info="Combines cupping therapy with physical movement or exercise to target specific areas, enhance blood flow, and improve muscle recovery and flexibility."/>
          </div>
        </div>

        <ContactCard style={{top: '50%'}}/>
      </div>
    </div>
  );
};

export default Home;