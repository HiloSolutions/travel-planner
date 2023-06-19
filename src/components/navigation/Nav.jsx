import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import Logo from './Logo';
import NavBarButtons from './NavBarButtons';
import SearchBar from './SearchBar';


const Nav = ({navSearch}) => {

  const { isAuthenticated } = useAuth0();



  return (
    <header>
      <div className='nav-container'>
        <div className="top-navigation">
          <div className="logo">
            <NavLink to="/"><Logo /></NavLink>
          </div>
          <nav>
            {isAuthenticated && (
              <div className="nav-menu">
                <ul>

                  <li>
                    <NavLink className="nav-link" to="/">Explore Countries</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/trips">My Trips</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                  </li>

                </ul>
              </div>
            )}

          </nav>
          <NavBarButtons />
        </div>
        {navSearch && <SearchBar />}
      </div>

    </header>
  )
}

export default Nav