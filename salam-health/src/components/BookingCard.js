import React from "react";
import CardImage from '../images/CardImage.png';
import arrow_right from '../images/chevron-right.png';

export default function Card(props){
    const handleButtonClick = () => {
        window.open('https://www.fresha.com/a/salam-health-southampton-uk-19-oxford-street-khby691r?_gl=1*1xc7coa*_ga*MTgzNTI0NTc3OS4xNzA2Nzg4OTc4*_ga_SMQNG7NE8C*MTcwNjk3NTE1My41LjEuMTcwNjk3OTkzOS40My4wLjA.&pId=973826', '_blank');
    };
    
    const learnMoreClick = () =>{
        console.log("clicked learn more")
    }

    return(
        <div className="treatment-card">
            <img src={props.image} alt='treatment image'/>

            <div className="treatment-text">
                <p className="treatment-name" style={{ textAlign: 'start', fontWeight: '700' }}>{props.title}</p>
                <p className="treatment-info" style={{ textAlign: 'start' }}>{props.description}</p>

                <p className="treatment-info" style={{ textAlign: 'start', marginBottom: '0', fontWeight: '700' }}>£{props.price}</p>
                <p className="treatment-info" style={{ textAlign: 'start', marginTop: '0', marginBottom: '0' }}>{props.duration}</p>
            </div>
            
            <div className="horizontal" style={{ justifyContent: 'space-between', width: '90%' }}>
                <button className="book-now dark-blue" style={{ width: '10vw' }} onClick={handleButtonClick}>
                    Book
                </button>

                <div className='learn-more' style={{ justifyContent: 'space-around', width: '8.5rem' }}>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>Learn More</p>
                    <div className='circle' style={{ width: '30px', height: '30px' }}>
                        <img src={arrow_right} style={{ width: '25px', height: '25px' }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
