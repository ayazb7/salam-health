// ContactCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import contactImage from '../images/contact-image.png';

function ContactCard() {

  return (
    <div className="contact-card">
        <div className='vertical-start input-padding'>
          <h4>Contact Us</h4>
          <div className='inputs-container'>
            <div className='horizontal-input'>
              <input type="text" placeholder="First Name" className="styled-input"/>
              <input type="text" placeholder="Last Name" className="styled-input"/>
            </div>
            <input type="text" placeholder="Email" className="styled-input"/>

            <textarea type="text" placeholder="Message" className="styled-input large-input"/>
          </div>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Contact"/>
        </div>
      </div>
  );
}

export default ContactCard;