// Home.js
import React, { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS file
import CuppingImage from '../images/CuppingImage.png';
import GroupImages from '../images/GroupImages.png';
import GroupImages2 from '../images/GroupImages2.png';
import Mobile1 from '../images/Mobile1.png';
import dots from '../images/dots.png';
import arrow from '../images/arrow_circle.png';
import arrow_right from '../images/chevron-right.png';
import consult from '../images/consult.png';
import choose from '../images/choose.png';
import book from '../images/book.png';
import rest from '../images/rest.png';
import arrow_narrow_left from '../images/arrow-narrow-left.png';
import arrow_narrow_right from '../images/arrow-narrow-right.png';
import group_dots from '../images/dots-group.png';
import ContactCard from './ContactCard';

const testimonials = [
  {
    name: 'John Armstrong',
    message: '\“After trying various treatments for my MSK injury, I finally found relief through active cupping at Salam Health. The therapist\'s expertise and personalized approach made a significant difference in my recovery journey. The combination of cupping and movement therapy helped restore strength and functionality to the affected area.\”'  
  },
  {
    name: 'Mahmoud Nasir',
    message: '\“I am incredibly grateful to Salam Health for their hijama treatment in managing my hip osteoarthritis. The therapist, a knowledgeable student doctor, made me feel at ease throughout the session. Thanks to the hijama treatment, I experienced a noticeable reduction in joint pain and inflammation. Salam Health\'s expertise in hijama has been invaluable in improving my overall well-being and managing my osteoarthritis effectively.\”'  
  },
];

const Home = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('right');

  const handleNextTestimonial = () => {
    setAnimationDirection('right');
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePreviousTestimonial = () => {
    setAnimationDirection('left');
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const currentTestimonial = testimonials[currentTestimonialIndex];

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
      <div className="centered-container hidden">
        <img src={GroupImages2} className="plus-imagetop hidden"/>
        <img src={GroupImages} className="plus-imagebot hidden"/>
        <img src={dots} className="dots hidden"/>
        <div className='horizontal'>
        <div className='vertical-center-container'> 
          <div className='vertical-start'>
          <img src={Mobile1} className="mobile hidden"/>
            <h3 className='home-text less-gap-2'>
              Specialised Therapeutic <br></br> Treatments
            </h3>

            <p className='home-descriptions'>We offer a wide range of treatments and <br/> packages based on natural therapies <br/> and holistic healing.</p>

            <div className='learn-more'>
              <p>Learn More</p>
              <div className='circle'>
                <img src={arrow_right}/>
              </div>
            </div>
          </div>
        </div>

          <img src={CuppingImage} className="cuppingImage"/>
        </div>
      </div>

      <div className='centered-container hidden mobile-no-height'>
        <img src={group_dots} className="group-dots hidden desktop-only"/>
        <div className='horizontal more-gap mobile-vertical'>

          <div className='horizontal less-gap desktop-only'>
            <div className='vertical-bottom-padding'>
              <img src={consult} className="consult"/>
              <img src={book} className="book"/>
            </div>
            <div className='vertical-top-padding'>
              <img src={choose} className="choose"/>
              <img src={rest} className="rest"/>
            </div>
          </div>

          <div className='vertical-center mobile-only' style={{ marginBottom: '3rem'}}>
              <p className='small-text'>HOW TO GET STARTED</p>

              <h3 className='home-text less-gap-2'>
                Simple step by step guide
              </h3>

              <p className='home-descriptions'>Follow our simple process to get the best<br></br>treatment as soon as possible.</p>
              <img src={consult} className="consult"/>
              <img src={choose} className="choose"/>
              <img src={book} className="book"/>
              <img src={rest} className="rest"/>
              <button className="book-now-large" onClick={handleGetStarted}>
                Get Started
              </button>
              {/* <div className='learn-more'>
                <p>Learn More</p>
                <div className='circle'>
                  <img src={arrow_right}/>
                </div>
              </div> */}
          </div>


          <div className='vertical-start desktop-only'>
            <p className='small-text'>HOW TO GET STARTED</p>

            <h3 className='home-text less-gap-2'>
              Simple step by step<br></br>guide
            </h3>

            <p className='home-descriptions'>Follow our simple process to get the best<br></br>treatment as soon as possible.</p>

            <div className='horizontal-start top-padding-1'>
              <button className="book-now-large" onClick={handleGetStarted}>
                Get Started
              </button>

              {/* <div className='learn-more'>
                <p>Learn More</p>
                <div className='circle'>
                  <img src={arrow_right}/>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue mobile-height' style={{ marginBottom: '64vh' }} > 
          <div className="testimonial-wrapper">
              <p className='center testimonial-title'>TESTIMONIALS</p>

              <div className={`testimonial-content ${animationDirection === 'right' ? 'testimonial-slide-right' : 'testimonial-slide-left'}`} 
                  key={`${currentTestimonialIndex}-${animationDirection}`}>
                  <p className='testimonial-text'>{currentTestimonial.message}</p>
                  <p className='testimonial-name'>{currentTestimonial.name}</p>
              </div>
          </div>

          <div className="button-wrapper">
            <div className='horizontal'>
                <div className='small-button' onClick={handlePreviousTestimonial}>
                    <img src={arrow_narrow_left} alt="Previous"/>
                </div>

                <div className='small-button' onClick={handleNextTestimonial}>
                    <img src={arrow_narrow_right} alt="Next"/>
                </div>
            </div>
          </div>
        </div>

        <ContactCard style={{ top: '45%'}}/>
      </div>

      
  
      {/* <div className="overlay"></div>
      <div className="overlay2"></div> */}
    </div>
  );
};

export default Home;
