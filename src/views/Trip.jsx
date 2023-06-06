
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name } = useParams();
  
  if (isLoading) {
    return <Loading />;
  }

  
  return (
    isAuthenticated && (
      <div>
        <h1>{name}</h1>
      </div>
    )
  );
};

export default Trip