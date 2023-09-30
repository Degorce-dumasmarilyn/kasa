// eslint-disable-next-line no-unused-vars
import React  from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "../hooks/useApartments";


function ApartmentGrid() {
  const apartments = useApartments();

 //useeffect avec une array vide == executes this function when the component loads
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard 
          key={apartment.id} 
          title={apartment.title} 
          imageUrl={apartment.cover} 
          id={apartment.id}
        />
        
      ))}
      
    </div>
  );
}

export default ApartmentGrid;
