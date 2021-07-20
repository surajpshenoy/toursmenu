import React, {useState} from "react";

const TourCard =({id, name, image, price, info}) => {
const [readInfo, setReadInfo] = useState(true);
return (

<article className="single-tour">
<img src={image} alt ={name} ></img>

<footer>
    <div className="tour-info">
        <h4>{name}</h4>
        <div className="tour-price">${price}</div>
    </div>
    <p>{readInfo? info : `${info.substring(0, 140)}...`}
    <button onClick={() => setReadInfo(!readInfo)}>
        {readInfo? 'read less' : 'read more'}
    </button>
    
    </p>
    <button className="delete-btn">not interested</button>
</footer>
</article>
)
}

export default TourCard;