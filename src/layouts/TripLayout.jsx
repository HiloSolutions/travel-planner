import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import { trips } from '../sample-data/trips';
import AlertBox from '../components/widgets/AlertBox';
import './TripLayout.css';
import location from '../images/location.png';


const makeTripLinks = () => {

  return trips.map((trip, index) => (
    <li key={index}>
      <Link to={`/trips/${index}/${trip.name}`}>
        <div className='trip-list-item'>
          <img src={location} alt="trip icon" />
          <div className='trip-list-item-contents'>
            <h3>{trip.name}</h3>
            <p>{trip.country}</p>
            <p>{trip.lastEdit}</p>
          </div>
        </div>
      </Link>
    </li>
  ));
};


const TripLayout = () => {
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
      <div className='trip-list'>
        <h1>My Trips</h1>
        <ul>{makeTripLinks()}</ul>
        <Outlet />
      </div>
    )
  )
}

export default TripLayout;