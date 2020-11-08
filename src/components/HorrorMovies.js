import React, { useEffect, useState } from 'react';

import { HorrorApiUrl } from 'key';
import { PopularMovieCard } from './PopularMovieCard';

export const HorrorMovies = () => {
  const [horroramovies, setHorrorMovies] = useState([]);

  useEffect(() => {
    fetch(HorrorApiUrl)
      .then((res) => res.json())
      .then((json) => {
        setHorrorMovies(json.results)
      })
  }, []);

  return (
    <section className="movie-card-list">
      {horroramovies.map((movie) => (
        <PopularMovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
};