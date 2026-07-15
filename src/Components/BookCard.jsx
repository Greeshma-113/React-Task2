import React from "react";

const BookCard = ({ title, quantity }) => {
  return (
    <div>
      <h2>{title}</h2>
      {quantity === 0 && <h3>Out of Stock</h3>}
    </div>
  );
};

export default BookCard;