// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./ApartmentHeader.scss";


export function ApartmentHeader ({ flat }) {
    const {name} = flat.host;
    const [firstName, lastName] = name.split(" ");

    return (
    <div className="apartment__header">
        <div className="apartment__title">
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
            <div className="apartment__tags">
                {flat.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
                
            </div> 
        </div>
        <div className="apartment__owner">
            <div className="apartment__owner__details">
                <h3>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
                <div className="apartment__owner__badge">
                    <img src={flat.host.picture} alt=""/>
                </div>
            </div>
        <div className="apartment__owner__stars">
            { [1, 2, 3, 4, 5].map((num)=> (
                <span key={num} className={flat.rating >= num ? "on" : ""}>
                    ★
                </span>
            ))}
            </div>
        </div>
    </div>
    )
}

ApartmentHeader.propTypes = {
    title: PropTypes.string.isRequired,
    flat: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired
};