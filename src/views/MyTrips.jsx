import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';



const MyTrips = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <div id='my-trips-alert-box-container'>
       write something here...
      </div>
    )
  );
};

export default MyTrips;