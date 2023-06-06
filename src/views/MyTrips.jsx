import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const MyTrips = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        What will this list look like?
      </div>
    )
  );
};

export default MyTrips;