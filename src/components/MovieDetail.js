import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { API_KEY } from '../key';
import { BackButton } from './BackButton';

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(DETAILS_API)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json)
      })
      .catch((error) => {
        console.error('Request failed', error)
      })
  }, [movieId, DETAILS_API])

  return (
    <>
      <article className="details-page">
        <section className="detail-backdrop" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),  url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
          <div className="movie-detail-content">
            <div className="movie-detail-back">
              <BackButton key={movies.key} />
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
                alt={movies.title} />
            </div>
            <div className="movie-detail-text">
              <div className="movie-detail-title">
                <a href={movies.homepage}>
                  <h1>{movies.title}</h1>
                </a>
                <span className="rating">{movies.vote_average}/10 </span>
              </div>
              <p className="overview">{movies.overview}</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};