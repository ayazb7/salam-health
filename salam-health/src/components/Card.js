export default function Card(props){
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }


    return(
            <div className="booking-cards">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-description">{props.description}</p>
                <div className="card-footer">
                    <span className="card-price">£ {props.price}</span>
                    <span>
                        <button className="book-now-card" onClick={handleButtonClick}>
                            Book Now
                        </button>
                    </span>
                </div>
            </div>
    )
}