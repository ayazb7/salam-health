import React from "react";
import CardImage from '../images/CardImage.png';

export default function Card(props){
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }


    return(
            <div className="booking-cards">
                <img className="card-img" src={CardImage} alt="the card therapy image" />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>
                <p className="card-price">£ {props.price}</p>
                <p className="card-duration">{props.duration}</p>
                <button className="book-now-card" onClick={handleButtonClick}>
                            Book Now
                 </button>
            </div>
    )
}
