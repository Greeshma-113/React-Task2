import React from "react";

const FoodCard = ({ name, veg }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{veg ? "Veg" : "Non-Veg"}</h3>
    </div>
  );
};

export default FoodCard;