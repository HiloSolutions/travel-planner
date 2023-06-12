import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import LoginButton from "../buttons/LoginButton";
import SignupButton from "../buttons/SignupButton";
import LogoutButton from "../buttons/LogoutButton";
import './Nav.css';
import Logo from './Logo';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='empty'>
        <div className="top-navigation">
          <div className="logo">
            <NavLink to="/"><Logo /></NavLink>
          </div>
          <nav>
            {!isAuthenticated && (
              <div className="nav-menu">
                <ul>
                  <>
                    <li>
                      <NavLink className="nav-link" to="/">Explore Countries</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/trips">My Trips</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                    </li>
                  </>
                </ul>
              </div>
            )}
            <form className='search'>
              <div className="search-inputs">
                <label for="location">
                  <div className="label">Location</div>
                  <input
                    name="location"
                    id="location"
                    placeholder="Where are you going?"
                  />
                </label>
              </div>
              <div class="search-button">
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </nav>
          <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
            <button className="dropdown-button" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faBars} />
              <i class="fas fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              {!isAuthenticated && (
                <>
                  <SignupButton />
                  <LoginButton />
                </>
              )}
              {isAuthenticated && (
                <>
                  <LogoutButton />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav