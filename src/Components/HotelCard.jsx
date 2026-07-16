import React from "react";

const HotelCard = ({ name, breakfast }) => {
  return (
    <div>
      <h2>{name}</h2>
      {breakfast && <h3>Free Breakfast</h3>}
    </div>
  );
};

export default HotelCard;