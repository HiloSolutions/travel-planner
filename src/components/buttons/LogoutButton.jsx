import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    await logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;