
//page that shows all the trips that this user has planned (sort of like how airbnb has a list of stays)
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';

const Trip = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { name } = useParams();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  
  return (
    isAuthenticated && (
      <div>
        <h1>{name}</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Trip