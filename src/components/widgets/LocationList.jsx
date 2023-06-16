import React, { useState } from 'react';
import image from '../../images/location.png';
import ItemDropdownOptions from './ItemDropdownOptions';
import './LocationModal.css';

const LocationList = ({
  location,
  savedLocations,
  updateList
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const itemClassName = isHovered ? 'location-list-item hovered' : 'location-list-item';

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
            <p>{`Tag: ${location.location_type_name}`}</p>
          </div>
        </div>
        <ItemDropdownOptions
          location={location}
          savedLocations={savedLocations}
          updateList={updateList}
        />
      </div>
    </li>
  );
};

export default LocationList;