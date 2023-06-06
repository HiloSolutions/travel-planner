//page that shows all the trips that this user has planned (sort of like how airbnb has a list of stays)
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'
import { trips } from '../sample-data/trips';


const makeTripLinks = () => {
  console.log(trips)
  return trips.map((trip, index) => (
    <li key={index}>
      <Link to={`/trips/${index}/${trip.name}`}>{trip.name}</Link>
    </li>
  ));
};

const MyTrips = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>My Trips</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <ul>{makeTripLinks()}</ul>
      </div>
    )
  );
};

export default MyTrips;