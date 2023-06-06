import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import NavBarButtons from './NavBarButtons';


const Nav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Trips</NavLink>
            </li>
          </>
        )}
      </ul>
      <NavBarButtons />
    </nav>
  )
}

export default Nav