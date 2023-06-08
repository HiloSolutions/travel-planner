import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import Map from '../components/Map';

const NewTrip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <Loading />;
  }


  return (
    isAuthenticated && (
      <div>
        <h1>New Trip</h1>
        <Map
          className="map-container"
          lat={5}
          lng={40}
          isMarkerShown={false}
        />
      </div>
    )
  );
};

export default NewTrip;