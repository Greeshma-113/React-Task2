<<<<<<< HEAD
import React from "react";

const MovieCard = ({ name, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      {rating === "Adult" && <h3>18+</h3>}
    </div>
  );
};

export default MovieCard;
=======
import React from 'react'

const MovieCard = ({ title, poster, rating, genre }) => {
  return (
    <div className="card">
      <img src={poster} alt={title} width="200" />
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
    </div>
  )
}

export default MovieCard
>>>>>>> c29ac19aed97dec95daffffd90fafb0bf2df66d7
