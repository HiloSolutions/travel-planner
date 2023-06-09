import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import TripLink from '../components/widgets/TripLink';
import Nav from '../components/navigation/Nav';
import Map from '../components/map-functionality/Map';
import AlertBox from '../components/widgets/AlertBox';
import './MyTrips.css';
import shortid from 'shortid';




const MyTrips = ({ trips }) => {
  const { isAuthenticated } = useAuth0();

  if (trips.length < 1) {
    return (
      <>
        <Nav />
        <AlertBox
          heading="No trips planned... yet!"
          message="Time to dust off your bags and start planning your next adventure."
          id='my-trips'
          url="/trips/new"
          btnText="Plan your next trip"
          btn={true}
        />
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
            <ul >
              {trips.map((trip, index) => (
                <TripLink key={shortid.generate()} trip={trip} />
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
