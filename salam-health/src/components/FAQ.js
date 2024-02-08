// FAQ.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contactImage from '../images/contact-image.png';
import phone from '../images/phone.png';
import Vector from '../images/Vector.png';

function FAQ(props) {
  const [expanded, setExpanded] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [rotatedIndexes, setRotatedIndexes] = useState([]);

  const questionsAndAnswers = [
    {
      question: 'Can I book an appointment for someone else?',
      answer: 'Yes, you can book an appointment for someone else. Please provide their details during the booking process.'
    },
    {
      question: 'Do I need a referral?',
      answer: 'No, you do not need a referral. You can book an appointment directly.'
    },
    {
      question: 'How long do treatment sessions take?',
      answer: 'The duration of treatment sessions varies depending on the type of treatment. On average, sessions last about 45 minutes.'
    }
  ];

  const handleAccordionClick = (index) => {
    setExpanded(expanded === index ? null : index);

    if (rotatedIndexes.includes(index)) {
      setRotatedIndexes(rotatedIndexes.filter((item) => item !== index));
    } else {
      setRotatedIndexes([...rotatedIndexes, index]);
    }
  };

  return (
    <div className="contact-card" style={props.style}>
      <div className='vertical-center  gap-1 card-content' style={{ padding: '2rem' }}>
        <h4 className="faq-mobile" style={{ marginTop: '2rem', marginBottom: '2rem' }}>Frequently Asked Questions</h4>
        <div className='inputs-container' style={{ width: '100%'}}>
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className='accordion-item'>
              <button
                className={`accordion-button ${expanded === index ? 'active' : ''}`}
                onClick={() => handleAccordionClick(index)}
              >
                <span style={{ marginRight: '10px' }}>{qa.question}</span>
                <span className={`arrow-icon ${rotatedIndexes.includes(index) ? 'rotate' : ''}`}>&#43;</span>
              </button>
              {expanded === index && (
                <div className="accordion-content">
                  <p>{qa.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='horizontal'>
          <button className="send-message">
            Contact Us
          </button>

          <a href="tel:+447459150327" className="circle-button">
            <img src={phone} alt="Call" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
