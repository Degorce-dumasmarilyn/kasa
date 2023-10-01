// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from 'prop-types';
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartementPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";


function ApartmentPage() {
  const flat = useApartment();  

  if (flat === null) return <div>... loading</div>
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
    <div className="apartment__description__area">
      <DescriptionPanel title="Description" content={flat.description} />
      <DescriptionPanel title="Equipements" 
      content={flat.equipments.map((eq, i) => (
        <li key={i}>{eq}</li>
      ))} />
    </div>
  </div>
  );
}

ApartmentPage.propTypes = {
  flat: PropTypes.object.isRequired,
};


export default ApartmentPage;
