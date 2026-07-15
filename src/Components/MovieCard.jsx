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