
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Map from '../components/map-functionality/Map';
import Nav from '../components/navigation/Nav';
import Form from '../components/widgets/Form';
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
        <div className='trip-page-container'>

          <div className="card">
            <div className="card-smooth-caption">
              <Back />
              <h5 className="card-title text-white">{name}</h5>
              <h6 className="card-subtitle text-white">Alternative caption</h6>
            </div>
            <Form />
          </div>


          <Map
            lat={5}
            lng={40}
          />
        </div>




      </>
    )
  );
};

export default Trip