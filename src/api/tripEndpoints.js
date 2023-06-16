import axios from 'axios';

const updateTripInDatabase = (inputs, id) => {
  return axios.post('http://localhost:8000/trip/update', { inputs, id })
    .then((response) => {
      console.log('database updated with new values')
      return response.data;
    });
};


//get data related to the trip itself (there can be many locations in one trip)
const getTripData = (id) => {
  return axios.get('http://localhost:8000/trip/', {
    params: { id }
  })
    .then((response) => {
      return response.data;
    });
};


//get all location types available to choose from (not specific to user)
const getLocationTypes = () => {
  return axios.get('http://localhost:8000/trip/locationCategories/')
    .then((response) => {
      return response.data;
    });
}


//get he locations saved by the user
const getTripLocations = (id) => {
  return axios.get('http://localhost:8000/trip/locations/', {
    params: { id }
  })
    .then((response) => {
      return response.data;
    })
}


//get list of all trips made by the user
const getMyTrips = (sub) => {
  return axios.get('http://localhost:8000/trip/list', {
    params: { sub }
  })
    .then((response) => {
      return response.data;
    });
}


export {
  updateTripInDatabase,
  getTripData,
  getTripLocations,
  getMyTrips,
  getLocationTypes
};