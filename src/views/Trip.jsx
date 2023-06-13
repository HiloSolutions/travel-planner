
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Map from '../components/map-functionality/Map';
import Nav from '../components/navigation/Nav';
import Loading from '../components/Loading';
import Back from '../components/buttons/Back';
import './Trip.css';

const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name } = useParams();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <>
        <Nav />
        <div>

          <div className="card">
            <div className="card-smooth-caption">
              <Back />
              <h5 className="card-title text-white">{name}</h5>
              <h6 className="card-subtitle text-white">Alternative caption</h6>
            </div>
            <div className="card-body">
              <p className="card-text"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.</p>
            </div>
          </div>


          <Map
            className="map-container"
            lat={5}
            lng={40}
            isMarkerShown={false}
          />
        </div>




      </>
    )
  );
};

export default Trip