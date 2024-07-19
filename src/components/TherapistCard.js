import React from "react";
import dots from '../images/dots.png';

export default function TherapistCard(props) {
    return(
        <div className="therapist-card">
            <div className="therapist-image-wrapper">
                <img src={props.image} alt='therapist-image' className="therapist-image"/>
            </div>

            <div className="therapist-text">
                <h3 className="therapist-name">{props.name}</h3>
                <p className="therapist-title">{props.title}</p>
                <p className="therapist-description">{props.description}</p>
            </div>

        </div>
    )
}