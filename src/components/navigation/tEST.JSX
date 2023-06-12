import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import NavBarButtons from './NavBarButtons';
import './Nav.css';
import Logo from './Logo';


const Nav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <NavLink to="/">
            <div className='Logo'>
              <Logo />
            </div>
          </NavLink>
      <ul>
        {isAuthenticated && (
          <>
          <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/trips">Trips</NavLink>
            </li>
          </>
        )}
      </ul>
      <NavBarButtons />
    </nav>
  )
}

export default Nav