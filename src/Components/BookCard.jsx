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