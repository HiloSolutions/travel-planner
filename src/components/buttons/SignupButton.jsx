import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      }
    });
  };

  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={handleSignup}>
      Register for Free
    </button>
  )
};

export default SignupButton