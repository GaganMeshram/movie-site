import React from 'react';

const MovieCard = ({movie}) => {
  
  return (
    <div>

      <span className='movies'>
        
        <img src={movie.Poster} alt="Movie Poster" />
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
      </span>
      
    </div>
  );
}

export default MovieCard;
