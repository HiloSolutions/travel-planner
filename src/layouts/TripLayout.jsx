import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import { trips } from '../sample-data/trips';



const makeTripLinks = () => {

  return trips.map((trip, index) => (
    <li key={index}>
      <Link to={`/trips/${index}/${trip.name}`}>{trip.name}</Link>
    </li>
  ));
};


const TripLayout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1>My Trips</h1>
        <ul>{makeTripLinks()}</ul>
        <Link to="/trips/new">New Trip</Link>
        <Outlet />
      </div>
    )
  )
}

export default TripLayout;