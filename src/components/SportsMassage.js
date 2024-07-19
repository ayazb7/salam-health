// CuppingTherapy.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS file
import ContactCard from './ContactCard';
import SportsMassageImg from '../images/sports_massage.png';

const SportsMassage = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/book', { replace: false, state: {} });
    window.scrollTo(0, 0);
  };

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
              Sports Massage
            </h3>
            <p className='sub-text'>Learn more about the transformative power of sports massage therapy at Salam Health.</p>
        </div>

        <img src={SportsMassageImg} className='cupping-therapy-image'/>

        <p className='treatment-description no-top-margin'>Sports massage therapy is a dynamic healing technique that takes athletes on a journey of rejuvenation and peak performance. At Salam Health, our specialized therapists utilize this holistic approach to optimize athletic potential and nurture the mind, body, and spirit. Through a combination of targeted techniques, including deep tissue massage and stretching, sports massage therapy alleviates muscle tension, enhances flexibility, and accelerates recovery. By integrating our expertise in holistic remedies, we go beyond physical healing to promote overall well-being and mental clarity. Experience the transformative power of sports massage therapy at Salam Health and unlock your full athletic potential in harmony with your body and soul.</p>
        <p className='treatment-description' style={{ marginBottom: '3rem' }}>Massage therapy treats a range of conditions including musculoskeletal pain, sports injuries, stress, headaches, post-surgical recovery, circulatory disorders, sleep disorders, chronic pain, and pregnancy discomfort. It reduces pain, improves mobility, promotes relaxation, aids healing, enhances circulation, and provides relief for various ailments. Book in for a free telephone consultation to tailor a personalised treatment!</p>

        <button className="book-now-large" onClick={handleGetStarted} style={{ marginBottom: '3rem' }}>
          Book Now
        </button>
      </div>

      <div className='centered-container-no-height hidden'>
        <ContactCard style={{ position: 'relative', marginBottom: '5rem' }}/>
      </div>
    </div>
  );
};

export default SportsMassage;