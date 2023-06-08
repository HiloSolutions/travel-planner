
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Map from '../components/Map';

const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name, lat, lng } = useParams();

  if (isLoading) {
    return <Loading />;
  }
console.log(lat, lng)

  return (
    isAuthenticated && (
      <div>
        <h1>{name}</h1>
        <Map
          className="map-container"
          lat={5}
          lng={40}
          isMarkerShown={true}
        />
      </div>
    )
  );
};

export default Trip