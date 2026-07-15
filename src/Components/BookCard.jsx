<<<<<<< HEAD
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
=======
import React from 'react'

const BookCard = ({ title, author, price, category }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
    </div>
  )
}

export default BookCard
>>>>>>> c29ac19aed97dec95daffffd90fafb0bf2df66d7
