import React from "react";

const FlightCard = ({ flight, seats }) => {
  return (
    <div>
      <h2>{flight}</h2>
      <h3>{seats > 0 ? "Seats Available" : "Fully Booked"}</h3>
    </div>
  );
};

export default FlightCard;