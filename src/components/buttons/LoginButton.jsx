import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  checkIfUserExists,
  addUserToDatabase
} from "../../api/userEndpoints";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();



  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;
