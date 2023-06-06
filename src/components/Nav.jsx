import React from 'react';
import { NavLink } from "react-router-dom";
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';

const Nav = () => {
  return (
    <nav>
      <ul>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/trips">Trips</NavLink>
        </li>
        <li>
          <LoginButton />
        </li>
        <li>
          <LogoutButton />
        </li>

      </ul>
    </nav>
  )
}

export default Nav