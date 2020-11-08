import React from 'react';

import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <NavLink to="/" exact className="nav-links">
        Now Playing
      </NavLink>
      <NavLink to="/horror" className="nav-links">
        Horror Movies
      </NavLink>
      <NavLink to="/christmas" className="nav-links">
        Christmas Movies
      </NavLink>
    </header>
  )
}