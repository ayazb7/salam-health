import React from "react";
import CardImage from '../images/CardImage.png';
import arrow_circle from '../images/arrow_circle.png';

export default function Card(props){
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }
    const learnMoreClick = () =>{
        console.log("clicked learn more")
    }


    return(
            <div className="booking-cards">
                <img className="card-img" src={CardImage} alt="the card therapy image" />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
                <p className="card-price">£ {props.price}</p>
                <p className="card-duration">{props.duration}</p>
                <div className="booking-info-card">
                    <button className="book-now-card" onClick={handleButtonClick}>
                                Book Now
                    </button>
                    <p className="card-info" onClick={learnMoreClick}>Learn more</p>
                    <span className="info-img-card"><img  onClick={learnMoreClick} src={arrow_circle} alt="arrow for info" /></span>
                </div>
            </div>
    )
}
