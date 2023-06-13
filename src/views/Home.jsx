import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';


const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
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