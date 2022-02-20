import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Profile from '../../components/Profile/Profile';

export const Header = () => {
  return (
    <header className="c-header">
    <div className="c-header__nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/about">About</NavLink>
        <Profile />
      </nav>
      </div>
    </header>
  );
};
