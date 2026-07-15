<<<<<<< HEAD
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
=======
import React from 'react'

const ProductCard = ({ name, price }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
    </div>
  )
}

export default ProductCard
>>>>>>> c29ac19aed97dec95daffffd90fafb0bf2df66d7
