import React from "react"

export default function Location(props) {
    return (
        <section className="location-container">
            <img  className = "location-img" src={props.imageUrl}/>
            <div className="location-text">
                <div className="location-text-top">
                    <div className="country">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>{props.location}</p>
                    </div>
                    <a href={props.googleMapsUrl} target="_blank" className="maps-link"><p>View on Google Maps</p></a>
                </div>
                <h2 className="location-name">{props.title}</h2>
                <p className="date">{`${props.startDate} - ${props.endDate}`}</p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}