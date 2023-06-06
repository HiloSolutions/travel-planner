import React from 'react';
import { Link } from "react-router-dom";
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
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