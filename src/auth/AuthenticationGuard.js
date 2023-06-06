import React from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../components/Loading';
const AuthenticationGuard = ({ x }) => {

  const GuardedComponent = withAuthenticationRequired(x, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });

  return <GuardedComponent />;

}

export default AuthenticationGuard;