import React from "react";

const RestaurantCard = ({ name, homeDelivery }) => {
  return (
    <div>
      <h2>{name}</h2>
      {homeDelivery && <h3>Home Delivery Available</h3>}
    </div>
  );
};

export default RestaurantCard;