import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import TripLink from '../components/widgets/TripLink';
import Nav from '../components/navigation/Nav';
import Map from '../components/map-functionality/Map';
import AlertBox from '../components/widgets/AlertBox';
import './MyTrips.css';



const MyTrips = ({ trips }) => {
  const { isAuthenticated } = useAuth0();

  if (trips.length < 1) {
    return (
      <>
        <Nav />
        <AlertBox url="/trips/new" text="Plan your trip" />
      </>
    );
  }

  return (
    isAuthenticated && (
      <>
        <Nav />
        <div className='trip-list'>
          <h1>My Trips</h1>
          <div className='layout-box'>
            <ul className='layout-box-trip-list'>
              {trips.map((trip, index) => (
                <TripLink key={index} trip={trip} />
              ))}
            </ul>
            <Map lat={53.6539} lng={-113.6293} />
          </div>
          <Outlet />
        </div>
      </>
    )
  );
};

export default MyTrips;
