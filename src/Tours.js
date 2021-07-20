import React from "react"
import TourCard from "./TourCard"

const Tours = ({ props }) => {
    return (

        <section>
            <div className="title">
            <h2>Our Tours</h2>
            {console.log({props})}
            <div className="underline"> </div>    
            </div>
            <div>
            {props.map((tour) => {
                return <TourCard key={tour.id} {...tour}></TourCard>
            })}
            </div>
            
        
        </section>
    );
};

export default Tours;