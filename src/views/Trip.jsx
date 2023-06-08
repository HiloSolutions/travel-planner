
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Map from '../components/map-functionality/Map';
import SearchBar from '../components/map-functionality/SearchBar';

const Trip = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated, isLoading } = useAuth0();
  const { name } = useParams();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>{name}</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          label={"Search here"}
        />
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