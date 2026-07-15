import React from "react";

const ProductCard = ({ product, orderValue }) => {
  return (
    <div>
      <h2>{product}</h2>
      <p>₹{orderValue}</p>
      {orderValue > 500 && <h3>Free Delivery</h3>}
    </div>
  );
};

export default ProductCard;