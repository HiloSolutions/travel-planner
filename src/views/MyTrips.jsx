import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import AlertBox from '../components/AlertBox';


const MyTrips = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <AlertBox />
    )
  );
};

export default MyTrips;