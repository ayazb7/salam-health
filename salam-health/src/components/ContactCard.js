// ContactCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import contactImage from '../images/contact-image.png';
import arrow_right from '../images/chevron-right.png';
import phone from '../images/phone.png';

function ContactCard(props) {

  return (
    <div className="contact-card" style={props.style}>
        <div className='vertical-start input-padding gap-1'>
          <h4>Contact Us</h4>
          <div className='inputs-container'>
            <div className='horizontal-input'>
              <input type="text" placeholder="First Name" className="styled-input"/>
              <input type="text" placeholder="Last Name" className="styled-input"/>
            </div>
            <div className='horizontal-input'>
              <input type="text" placeholder="Email" className="styled-input"/>
            </div>

            <div className='horizontal-input'>
              <textarea type="text" placeholder="Message" className="styled-input large-input"/>
            </div>
          </div>

          <div className='horizontal'>
            <button className="send-message">
              Send message
              <img src={arrow_right}/>
            </button>

            <button className="circle-button">
              <img src={phone}/>
            </button>
          </div>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Contact"/>
        </div>
      </div>
  );
}

export default ContactCard;