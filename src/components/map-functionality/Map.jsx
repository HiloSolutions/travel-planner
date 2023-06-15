import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import CustomMarker from './CustomMarker'




const Map = ({ lat, lng, zoom, locations }) => {

  console.log(3, lat, lng, zoom, locations)
  return (
    <>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom || 13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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