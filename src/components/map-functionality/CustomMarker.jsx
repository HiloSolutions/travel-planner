import React from 'react';
import { Marker, Popup } from 'react-leaflet';
//import mapMarkers from '../../data/mapMarkers';

const CustomMarker = ({location}) => {

  console.log(location);
  const lat = location.location_lat;
  const lng = location.location_lng;
  const position = [lat, lng];


  return (
    <Marker position={position}>
      <Popup>
        <div>
          <h5>{location.location_name}</h5>
          <p><strong>Address:</strong>{lat}{lng}</p>
          <p><strong>Tag:</strong>{location.location_type_name}</p>
        </div>
      </Popup>
    </Marker>
  )
};

export default CustomMarker;