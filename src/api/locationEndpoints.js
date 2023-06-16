import axios from 'axios';

//get he locations saved by the user
const getTripLocations = (id) => {
  return axios.get('http://localhost:8000/location/saved/', {
    params: { id }
  })
    .then((response) => {
      return response.data;
    })
};

//get all location types available to choose from (not specific to user)
const getLocationTypes = () => {
  return axios.get('http://localhost:8000/location/categories/')
    .then((response) => {
      return response.data;
    });
}


//delete location from db FOREVER
const deleteLocation = (tripId, locationId) => {
  return axios.delete('http://localhost:8000/location/delete/', {
    params: { tripId, locationId }
  })
    .then((response) => {
      return response.data;
    })
}


//add new location to db
const addLocationToDb = (tripId, sub) => {
  return axios.post('http://localhost:8000/location/add', { tripId, sub })
  .then((response) => {
    console.log('database updated with new location')
    return response.data;
  });
}

export {
  getTripLocations,
  getLocationTypes,
  deleteLocation,
  addLocationToDb
};