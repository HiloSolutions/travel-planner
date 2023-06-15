
import React, { useState, useEffect } from 'react';
import { getTripData } from '../api/tripEndpoints';
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
  const { name, id } = useParams();
  const [tripValues, setTripValues] = useState(null);

  useEffect(() => {
    getTripData(id)
      .then((res) => {
        setTripValues({
          lat: res.trip_center_lat,
          lng: res.trip_center_lng,
          startDate: res.trip_start_date,
          endDate:  res.trip_end_date,
          zoom: res.zoom,
        });
      });
  }, [id]);


  if (isLoading || !tripValues) {
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
            <Form
              tripId={id}
              tripValues={tripValues}
              setTripValues={setTripValues}
            />
          </div>


          <Map
            lat={tripValues.lat}
            lng={tripValues.lng}
            zoom={tripValues.zoom}
          />
        </div>




      </>
    )
  );
};

export default Trip