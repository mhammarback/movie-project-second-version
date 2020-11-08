import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { PopularMovieList } from './components/PopularMovieList';
import { MovieDetail } from './components/MovieDetail';
import { HorrorMovies } from './components/HorrorMovies';
import { ChristmasMovies } from './components/ChristmasMovies';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <PopularMovieList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/horror" exact>
          <HorrorMovies />
        </Route>
        <Route path="/christmas/">
          <ChristmasMovies />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
