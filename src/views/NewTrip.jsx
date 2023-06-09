import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from '../components/navigation/Nav';
import Loading from '../components/Loading';
import Map from '../components/map-functionality/Map';
//import Places from '../components/map-functionality/Places';
import SearchBar from '../components/map-functionality/SearchBar';
import { getPlacesAPI } from '../api/getPlacesApi';


const NewTrip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState(null);
  
  useEffect(() => {
    const result = getPlacesAPI();
    setPlaces(result);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <div>
        <Nav />
        <h1>New Trip</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          label={"Enter a country name"}
        />
        
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