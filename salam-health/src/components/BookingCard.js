import React from "react";
import { useNavigate } from 'react-router-dom';
import CardImage from '../images/CardImage.png';
import arrow_right from '../images/chevron-right.png';

export default function BookingCard(props){
    const handleButtonClick = () => {
        window.open('https://www.fresha.com/a/salam-health-southampton-uk-19-oxford-street-khby691r?_gl=1*1xc7coa*_ga*MTgzNTI0NTc3OS4xNzA2Nzg4OTc4*_ga_SMQNG7NE8C*MTcwNjk3NTE1My41LjEuMTcwNjk3OTkzOS40My4wLjA.&pId=973826', '_blank');
    };

    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(props.learnMorePath, { replace: false, state: {} });
        window.scrollTo(0, 0);
      };

    const renderDescription = () => {
        if (Array.isArray(props.description)) {
            // Render as list if description is an array
            return props.description.map((item, index) => (
                <p key={index} className="treatment-info" style={{ textAlign: 'start', marginBottom: '0', marginTop: '0.5rem' }}>{item}</p>
            ));
        } else {
            // Render as paragraph if description is a string
            return <p className="treatment-info" style={{ textAlign: 'start' }}>{props.description}</p>;
        }
    };

    return(
        <div className="treatment-card" style={ props.style }>
            <img src={props.image} alt='treatment image'/>

            <div className="treatment-text" style={{ width: Array.isArray(props.description) ? '90%' : 'initial' }}>
                <p className="treatment-name" style={{ textAlign: 'start', fontWeight: '700' }}>{props.title}</p>
                {renderDescription()}

                <p className="treatment-info" style={{ textAlign: 'start', marginBottom: '0', fontWeight: '700' }}>£{props.price}</p>
                <p className="treatment-info" style={{ textAlign: 'start', marginTop: '0', marginBottom: '0' }}>{props.duration}</p>
            </div>
            
            <div className="horizontal" style={{ justifyContent: 'space-between', width: '90%' }}>
                <button className="book-now dark-blue" style={{ width: '10vw' }} onClick={handleButtonClick}>
                    Book
                </button>

                <div className='learn-more' style={{ justifyContent: 'space-around', width: '8.5rem' }} onClick={handleLearnMore}>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>Learn More</p>
                    <div className='circle' style={{ width: '30px', height: '30px' }}>
                        <img src={arrow_right} style={{ width: '25px', height: '25px' }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
