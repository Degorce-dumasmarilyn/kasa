//eslint-disable-next-line no-unused-vars
import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ApartmentCard(props) {
    return (
        <Link to="/flat" state={{
            apartmentId: props.id
        }}>

            <div className="Apartment">
                <img src={props.imageUrl} alt="" />
                <div className="Apartment__subtitle">{props.title}</div> 
            </div>
        </Link>
    );
}
ApartmentCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    
  };

export default ApartmentCard;