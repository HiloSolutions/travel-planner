
import React, { useState, useEffect } from 'react';
import {
  getTripData,
  getTripLocations
} from '../api/tripEndpoints';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Map from '../components/map-functionality/Map';
import Nav from '../components/navigation/Nav';
import LocationList from '../components/widgets/LocationList';
import Form from '../components/widgets/Form';
import Loading from '../components/Loading';
import AlertBox from '../components/widgets/AlertBox';
import Back from '../components/buttons/Back';
import { getLocationTypes } from '../api/tripEndpoints';

import './Trip.css';


const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name, id } = useParams();
  const [tripValues, setTripValues] = useState(null);
  const [savedLocations, setSavedLocations] = useState(null);


  //get information from the database that is relevant to the user
  useEffect(() => {
    getTripData(id)
      .then((res) => {
        setTripValues({
          lat: res.trip_center_lat,
          lng: res.trip_center_lng,
          startDate: res.trip_start_date,
          endDate: res.trip_end_date,
          zoom: res.zoom,
        });
        return getTripLocations(id);
      })
      .then((res) => {
        setSavedLocations(res);
      })
      .catch((error) => {
        console.log(error)
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
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle">Alternative caption</h6>
            </div>
            {(!savedLocations || savedLocations.length < 1) && (
              <AlertBox
                heading="No adventures planned... yet!"
                message="Time to research some destinations."
                id='plan-trip'
                url=''
                btnText="Build your Map"
              />
            )
            }
            {(savedLocations && savedLocations.length >= 1) && (
              <ul>
                {savedLocations.map((e, i) => (
                  <LocationList
                    key={i}
                    location={e}
                  />
                ))}
              </ul>
            )
            }

            {/* <Form
              tripId={id}
              tripValues={tripValues}
              setTripValues={setTripValues}
            /> */}
          </div>

          <Map
            lat={tripValues.lat}
            lng={tripValues.lng}
            locations={savedLocations}
            setLocations={setSavedLocations}
          />
        </div>
      </>
    )
  );
};

export default Trip