import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const NewTrip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>New Trip</h1>
      </div>
    )
  );
};

export default NewTrip