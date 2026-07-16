import React from "react";

const LaptopCard = ({ brand, ram }) => {
  return (
    <div>
      <h2>{brand}</h2>
      <p>RAM: {ram}GB</p>
      {ram >= 16 && <h3>Gaming Laptop</h3>}
    </div>
  );
};

export default LaptopCard;