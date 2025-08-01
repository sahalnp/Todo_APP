import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <div>
      <NavLink to="/dash">DASH</NavLink>
      <NavLink to="/">HOME</NavLink>
    </div>
  );
};
