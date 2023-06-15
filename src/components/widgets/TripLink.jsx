import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import location from '../../images/location.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';



const TripLink = ({ trip }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const itemClassName = isHovered ? 'trip-list-item hovered' : 'trip-list-item';

  return (
    <li>
      <Link to={`/trips/${trip.id}/${trip.trip_name}`}>
        <div
          className={itemClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={location} alt="trip icon" />
          <div className='trip-list-item-contents'>
            <h3>{trip.trip_name}</h3>
            <p>{`Last Edit: ${trip.date_updated}`}</p>
          </div>
          <div className='trip-list-controls'>
            <FontAwesomeIcon className='fa-menu' icon={faEllipsis} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TripLink;