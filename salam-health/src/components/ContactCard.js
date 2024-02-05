// ContactCard.js
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import contactImage from '../images/contact-image.png';
import arrow_right from '../images/chevron-right.png';
import phone from '../images/phone.png';

function ContactCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !message) {
      setValidationMessage('All fields are required');
      return;
    }

    // Clear previous validation message
    setValidationMessage('');

    // Use the emailjs.sendForm function
    emailjs
    .sendForm('service_j3xclp1', 'template_fr08b1d', form.current, 'SmtwwMtrMcQScPLai') 
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
      },
      (error) => {
        console.error('Failed to send email:', error.text);
      }
    );
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact-card" style={props.style}>
      <form ref={form} className='vertical-start input-padding gap-1'>
        <h4>Contact Us</h4>
        <div className='inputs-container'>
          <div className='horizontal-input'>
            <input
              type="text"
              autoComplete="given-name"
              placeholder="First Name"
              className="styled-input"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              autoComplete="family-name"
              placeholder="Last Name"
              className="styled-input"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className='horizontal-input'>
            <input
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="styled-input"
              name = 'email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='horizontal-input'>
            <textarea
              placeholder="Message"
              className="styled-input large-input"
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}

        <div className='horizontal'>
          <button type="submit" className="send-message" onClick={sendEmail}>
            Send message
            <img src={arrow_right} alt="Arrow right"/>
          </button>

          <a href="tel:+447459150327" className="circle-button">
            <button>
              <img src={phone} alt="Call" />
            </button>
          </a>
        </div>
      </form>

      <div className="contact-image">
        <img src={contactImage} alt="Contact"/>
      </div>
    </div>
  );
}

export default ContactCard;
