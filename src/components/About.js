// About.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import ContactCard from './ContactCard';
import BadrPic from '../images/badr.png';
import TherapistCard from './TherapistCard';

const About = () => {
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
              About Us
            </h3>
            <p className='treatment-description bottom-marging-1' style={{ textAlign: 'center' }}>Salam Health Ltd is an alternative medicine company that specialises in natural healing methods, including dry and wet cupping therapy and sports massage. Our team of experienced practitioners are dedicated to helping individuals achieve optimal health and wellness through holistic treatments that promote balance and harmony in the body. At Salam Health, we believe in the power of traditional healing practices and are committed to providing safe, effective, and personalised therapies to all of our clients. Whether you're looking to relieve pain, reduce stress, or enhance your overall well-being, our skilled practitioners are here to help you achieve your health goals. </p>
        </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue mobile-margin-botton' style={{ height: 'auto', justifyContent: 'center', marginBottom: '5vh' }}> 
          <p className='center testimonial-title cupping' style={{ paddingBottom: '2rem'}}>
            Our Therapists
          </p>

          <TherapistCard name="Badr Bahaj" title="Founder & Student Doctor" image={BadrPic} description="Salam Health founder, Badr Bahaj is a final year student doctor who has a passion for alternative medicine. He was inspired to start Salam Health Ltd after seeing the positive impact that alternative medicine can have on people's lives. He noticed that many people were seeking natural remedies and non-invasive treatments for their health issues, but were struggling to find reliable and trustworthy practitioners." />
        </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <ContactCard style={{ position: 'relative', marginBottom: '5vh' }}/>
      </div>
    </div>
  );
};

export default About;