import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../components/navigation/Nav';
import Map from '../components/map-functionality/Map';
import AlertBox from '../components/widgets/AlertBox';
import './MyTrips.css';
import location from '../images/location.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';



const makeTripLinks = (trips) => {
  return trips.map((trip, index) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const itemClassName = isHovered ? 'trip-list-item hovered' : 'trip-list-item';

    return (
      <li key={index}>
        <Link to={`/trips/${index}/${trip.trip_name}`}>
          <div
            className={itemClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={location} alt="trip icon" />
            <div className='trip-list-item-contents'>
              <h3>{trip.trip_name}</h3>
              <p>{trip.location_name}</p>
              <p>{trip.date_updated}</p>
            </div>
            <div className='trip-list-controls'>
              <FontAwesomeIcon className='fa-menu' icon={faEllipsis} />
            </div>
          </div>
        </Link>
      </li>
    );
  });
};



const TripLayout = ({ trips }) => {
  const { isAuthenticated } = useAuth0();

  if (trips.length < 1) {
    return (
      <AlertBox
        url="/trips/new"
        text="Plan your trip"
      />
    );
  };

  return (
    isAuthenticated && (
      <>
      <Nav />
      <div className='trip-list'>
        <h1>My Trips</h1>

        <div className='layout-box'>
          <ul className='layout-box-trip-list'>{makeTripLinks(trips)}</ul>
          <Map
            lat={53.6539}
            lng={-113.6293}
          />
        </div>
        <Outlet />
      </div>
      </>
    )
  )
}

export default TripLayout;