
import React, { useState, useEffect } from 'react';
import { getTripData } from '../api/tripEndpoints';
import { getTripLocations } from '../api/locationEndpoints';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Map from '../components/map-functionality/Map';
import Nav from '../components/navigation/Nav';
import LocationList from '../components/widgets/LocationList';
import Form from '../components/widgets/Form';
import Loading from '../components/Loading';
import AlertBox from '../components/widgets/AlertBox';
import Back from '../components/buttons/Back';
import './Trip.css';
import shortid from 'shortid';


const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name, id } = useParams();
  const [tripValues, setTripValues] = useState(null);
  const [savedLocations, setSavedLocations] = useState(null);

  //set saved locations on delete in child
  const updateList = (newSavedLocations) => {
    console.log(newSavedLocations);
    setSavedLocations(newSavedLocations);
  };

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
              <div className="content-wrapper">
                <Back />
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle">Alternative caption</h6>
              </div>
            </div>
            {(!savedLocations || savedLocations.length < 1) && (
              <AlertBox
                heading="No adventures planned... yet!"
                message="Click anywhere on the map to add your first destination."
                id='plan-trip'
                url=''
                btn={false}
              />
            )
            }
            {(savedLocations && savedLocations.length >= 1) && (
              <ul className='location-list'>
                {savedLocations.map((e, i) => (
                  <LocationList
                    key={shortid.generate()}
                    location={e}
                    savedLocations={savedLocations}
                    setSavedLocations={setSavedLocations}
                    updateList={updateList}
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
            tripId={id}
          />
        </div>
      </>
    )
  );
};

export default Trip