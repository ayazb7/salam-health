// ContactCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import contactImage from '../images/contact-image.png';
import arrow_right from '../images/chevron-right.png';
import phone from '../images/phone.png';

function ContactCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSendMessage = () => {
    if (!firstName || !lastName || !email || !message) {
      setValidationMessage('Please fill in all fields.');
      return;
    }
    // Add logic to send message
    console.log("Message sent");
    setValidationMessage(''); // Clear validation message on successful send
  };

  return (
    <div className="contact-card" style={props.style}>
      <form className='vertical-start input-padding gap-1' onSubmit={handleSendMessage}>
        <h4>Contact Us</h4>
        <div className='inputs-container'>
          <div className='horizontal-input'>
            <input
              type="text"
              placeholder="First Name"
              className="styled-input"
              value={firstName}
              required // Adding required attribute
            />
            <input
              type="text"
              placeholder="Last Name"
              className="styled-input"
              value={lastName}
              required // Adding required attribute
            />
          </div>
          <div className='horizontal-input'>
            <input
              type="email" // Changed type to email for email validation
              placeholder="Email"
              className="styled-input"
              value={email}
              required // Adding required attribute
            />
          </div>
          <div className='horizontal-input'>
            <textarea
              placeholder="Message"
              className="styled-input large-input"
              value={message}
              required // Adding required attribute
            />
          </div>
        </div>

        <div className='horizontal'>
          <button type="submit" className="send-message">
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