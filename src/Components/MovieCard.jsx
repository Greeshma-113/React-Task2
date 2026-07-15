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