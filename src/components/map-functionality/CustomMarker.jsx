import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
//import mapMarkers from '../../data/mapMarkers';

const CustomMarker = ({ location }) => {

  const category = location.location_type_category
  const lat = location.location_lat;
  const lng = location.location_lng;
  const position = [lat, lng];


  const chooseIcon = () => {
    if (category === 'sightSeeing' || category === 'artAndEducation'){
      return '2x-red';
    }
    if (category === 'outdoors'){
      return '2x-green';
    }
    if (category === 'nightlife' || category === 'foodAndDrink'){
      return '2x-violet';
    }
    if (category === 'nightlife' || category === 'foodAndDrink'){
      return '2x-violet';
    }
    if (category === 'pointOfCuriosity') {
      return '2x-blue'
    }
    if (category === 'accomodation' || category === 'transportation'|| category === 'pitstop') {
      return 'orange'
    }
    return '2x-grey';
  }

  const customIconUrl = chooseIcon();

  const customIcon = icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${customIconUrl}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Marker
      position={position}
      icon={customIcon}
    >
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