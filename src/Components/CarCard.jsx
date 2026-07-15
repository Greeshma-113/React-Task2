import React from "react";

const CarCard = ({ name, fuel }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{fuel}</p>
      {fuel === "Electric" && <h3>Electric Vehicle</h3>}
    </div>
  );
};

export default CarCard;