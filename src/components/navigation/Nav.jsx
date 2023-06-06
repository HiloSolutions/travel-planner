import React from 'react';
import { NavLink } from "react-router-dom";
import NavBarButtons from './NavBarButtons';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';

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

      </ul>
      <NavBarButtons />
    </nav>
  )
}

export default Nav