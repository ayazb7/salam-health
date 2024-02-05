import React from "react";
import CardImage from '../images/cupping-therapy.png';

export default function TreatmentCard(props) {
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }

    return(
        <div className="treatment-card">
            <img src={props.image} alt='treatment image'/>

            <div className="treatment-text">
                <p className="treatment-name">{props.name}</p>
                <p className="treatment-info">{props.info}</p>
            </div>
            
            <button className="book-now dark-blue" style={{ width: '10vw', marginTop: 'auto'}} onClick={handleButtonClick}>
                Book
            </button>
        </div>
    )
}