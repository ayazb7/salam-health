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

    if (!form.current.checkValidity()) {
      // The form is not valid, let the browser show validation messages
      return;
    }
  
    // Use the emailjs.sendForm function
    emailjs
      .sendForm('service_j3xclp1', 'template_fr08b1d', form.current, 'SmtwwMtrMcQScPLai') 
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Clear the form fields after successful submission
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  return (
    <div className="contact-card" style={props.style}>
      <form ref={form} onSubmit={sendEmail} className='vertical-start input-padding gap-1'>
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

        <div className='horizontal'>
          <button type="submit" className="send-message">
            Send message
            <img src={arrow_right} alt="Arrow right"/>
          </button>

          <a href="tel:+447459150327" className="circle-button">
            <img src={phone} alt="Call" />
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
