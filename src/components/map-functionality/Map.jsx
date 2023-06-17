import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';
import { addLocationToDb } from '../../api/locationEndpoints';
import CustomMarker from './CustomMarker';
import { useAuth0 } from "@auth0/auth0-react";


const MapContent = ({ onClick }) => {
  useMapEvents({
    click: event => onClick(event)
  });
  return null;
};



const Map = ({ 
  lat, 
  lng, 
  locations, 
  setLocations,
  tripId
}) => {
  const { user } = useAuth0();
console.log('locations', locations)
  const mapClicked = (e) => {
    const newLocation = {
      location_lat: e.latlng.lat,
      location_lng: e.latlng.lng,
      location_name: 'Untitled Location',
      location_type_category: 'noCategory',
      location_type_name: 'No Category',
      id: new Date().getTime() // Generate a unique ID for each marker
    };
    addLocationToDb(newLocation, tripId, user.sub);
    setLocations(prevLocations => [...prevLocations, newLocation]);
  };

  

  return (
    <>
      <MapContainer
        center={[lat, lng]}
        zoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent
          onClick={mapClicked}
        />
        {locations && locations.length > 0 && (
          locations.map((location, index) => (
            <CustomMarker location={location} key={index} />
          ))
        )
        }

      </MapContainer>
    </>

  );
};


export default Map;