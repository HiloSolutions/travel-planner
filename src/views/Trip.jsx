
import React, { useState, useEffect } from 'react';
import { getTripData, getTripLocations } from '../api/tripEndpoints';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import Map from '../components/map-functionality/Map';
import Nav from '../components/navigation/Nav';
import Form from '../components/widgets/Form';
import Loading from '../components/Loading';
import AlertBox from '../components/widgets/AlertBox';
import Back from '../components/buttons/Back';
import './Trip.css';


const Trip = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { name, id } = useParams();
  const [tripValues, setTripValues] = useState(null);
  const [locations, setLocations] = useState(null);
  const [sliderValue, setSliderValue] = useState(10);


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
        setLocations(res);
        setSliderValue(res.zoom);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [id]);


  if (isLoading || !tripValues) {
    return <Loading />;
  }

  console.log(1, locations)
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
              sliderValue={sliderValue}
            />
            {(!locations || locations.length < 1) && (
              <AlertBox 
              url='https://www.flaticon.com/free-icon/sightseeing_7051603?term=sightseeing&page=1&position=10&origin=search&related_id=7051603'
              text='Time to pick some locations!'
              />
            )
            }
          </div>


          <Map
            lat={tripValues.lat}
            lng={tripValues.lng}
            zoom={sliderValue}
            locations={locations}
          />
        </div>




      </>
    )
  );
};

export default Trip