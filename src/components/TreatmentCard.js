import React from "react";

export default function TreatmentCard(props) {
    const handleButtonClick = () => {
        window.open('https://www.fresha.com/a/salam-health-southampton-uk-19-oxford-street-khby691r?_gl=1*1xc7coa*_ga*MTgzNTI0NTc3OS4xNzA2Nzg4OTc4*_ga_SMQNG7NE8C*MTcwNjk3NTE1My41LjEuMTcwNjk3OTkzOS40My4wLjA.&pId=973826', '_blank');
    };

    return(
        <div className="treatment-card">
            <img src={props.image} alt='treatment-image'/>

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