export default function Card(props){
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }


    return(
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p><span className="bold">£{props.price}</span></p>
                <button className="book-now-card" onClick={handleButtonClick}>
                     Book Now
                </button>
            </div>
    )
}