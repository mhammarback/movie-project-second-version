import React, { useEffect, useState } from 'react';

import { ChristmasApiUrl} from 'key';
import { PopularMovieCard } from './PopularMovieCard';

export const ChristmasMovies = () => {
  const [christmasmovies, setChristmasMovies] = useState([]);

    useEffect(() => {
    fetch(ChristmasApiUrl)
    .then(res => res.json())
    .then(json => {
      setChristmasMovies(json.results)
    })
  }, []);

  return (
    <section className="movie-card-list">
          {christmasmovies.map((movie) => (
          <PopularMovieCard key= {movie.id} {...movie} />
        ))}
        </section> 
  );
};