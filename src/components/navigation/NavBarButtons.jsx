import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../buttons/LoginButton";
import SignupButton from "../buttons/SignupButton";
import LogoutButton from "../buttons/LogoutButton";

const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
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
  )
}

export default NavBarButtons