import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated && (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      )}
    </div>


  );
};

export default Home