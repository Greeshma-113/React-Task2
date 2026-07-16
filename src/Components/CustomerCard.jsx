import React from "react";

const CustomerCard = ({ name, points }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>
        {points >= 1000
          ? "Gold"
          : points >= 500
          ? "Silver"
          : "Bronze"}
      </h3>
    </div>
  );
};

export default CustomerCard;