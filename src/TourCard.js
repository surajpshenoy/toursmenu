import React from "react";

const TourCard =({id, name, image, price, info}) => {
return (

<article className="single-tour">
<img src={image} alt ={name} ></img>

<footer>
    <div className="tour-info">
        <h4>{name}</h4>
        <div className="tour-price">${price}</div>
    </div>
    <p>{info}</p>
    <button className="delete-btn">not interested</button>
</footer>
</article>
)
}

export default TourCard;