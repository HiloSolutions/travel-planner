import React, { useState } from 'react';
import image from '../../images/location.png';
import ItemDropdownOptions from './ItemDropdownOptions';
import { Chip } from '@mui/material';
import './LocationModal.css';

const LocationList = ({
  location,
  setSavedLocations,
  savedLocations,
  updateList
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const category = location.location_type_category;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const itemClassName = isHovered ? 'location-list-item hovered' : 'location-list-item';

  
  const chooseColor = () => {
    if (category === 'sightSeeing' || category === 'artAndEducation') {
      return '#cb273b';
    }
    if (category === 'outdoors') {
      return '#24ac20';
    }
    if (category === 'nightlife' || category === 'foodAndDrink') {
      return '#981fc9';
    }

    if (category === 'pointOfCuriosity') {
      return '#2d80cb'
    }
    if (category === 'accomodation' || category === 'transportation' || category === 'pitstop') {
      return '#c87e1e'
    }
    return '#737373';
  }

  const chipColor = chooseColor();

  return (
    <li className='list-item'>
      <div
        className={itemClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='location-flex'>
          <img src={image} alt="map icon" />
          <div className='location-list-item-contents'>
            <h3>{location.location_name}</h3>
            <Chip
              label={location.location_type_name}
              style={{
                backgroundColor: chipColor,
                color: 'white',
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <ItemDropdownOptions
          location={location}
          savedLocations={savedLocations}
          setSavedLocations={setSavedLocations}
          updateList={updateList}
        />
      </div>
    </li>
  );
};

export default LocationList;