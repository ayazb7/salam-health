// Home.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file
import CuppingImage from '../images/CuppingImage.png';
import GroupImages from '../images/GroupImages.png';
import GroupImages2 from '../images/GroupImages2.png';
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
      <div className="centered-container hidden">
        <img src={GroupImages2} className="plus-imagetop hidden"/>
        <img src={GroupImages} className="plus-imagebot hidden"/>
        <img src={dots} className="dots hidden"/>
        <div className='horizontal'>
          <div className='vertical-start'>
            <h3 className='home-text less-gap-2'>
              Specialised Therapeutic <br></br> Treatments
            </h3>

            <p className='home-descriptions'>We offer a wide range of treatments and<br></br>packages based on natural therapies and<br></br>holistic healing.</p>

            <div className='learn-more'>
              <p>Learn More</p>
              <div className='circle'>
                <img src={arrow_right}/>
              </div>
            </div>
          </div>

          <img src={CuppingImage} className="cuppingImage"/>
        </div>
      </div>

      <div className='centered-container hidden'>
        <img src={group_dots} className="group-dots hidden"/>
        <div className='horizontal more-gap'>

          <div className='horizontal less-gap'>
            <div className='vertical-bottom-padding'>
              <img src={consult}/>
              <img src={book}/>
            </div>
            <div className='vertical-top-padding'>
              <img src={choose}/>
              <img src={rest}/>
            </div>
          </div>


          <div className='vertical-start'>
            <p className='small-text'>HOW TO GET STARTED</p>

            <h3 className='home-text less-gap-2'>
              Simple step by step<br></br>guide
            </h3>

            <p className='home-descriptions'>Follow our simple process to get the best<br></br>treatment as soon as possible.</p>

            <div className='horizontal-start top-padding-1'>
              <button className="book-now-large">
                Get Started
              </button>

              <div className='learn-more'>
                <p>Learn More</p>
                <div className='circle'>
                  <img src={arrow_right}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='centered-container-no-height hidden'>
        <div className='rectangle-fw blue'> 
          <p className='center testimonial-title'>
            TESTIMONIALS
          </p>

          <p className='center testimonial-text'>
            “After trying various treatments for my MSK injury, I finally found relief through active cupping at Salam Health. The therapist's expertise and personalized approach made a significant difference in my recovery journey. The combination of cupping and movement therapy helped restore strength and functionality to the affected area.”
          </p>

          <p className='center testimonial-name'>
            John Armstrong
          </p>

          <div className='horizontal'>
            <div className='small-button'>
              <img src={arrow_narrow_left}/>
            </div>

            <div className='small-button'>
              <img src={arrow_narrow_right}/>
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
