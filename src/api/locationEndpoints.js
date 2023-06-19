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
const addLocationToDb = (locationId, tripId, sub) => {
  return axios.post('http://localhost:8000/location/add', { locationId, sub, tripId })
  .then((response) => {
    console.log('database updated with new location')
    return response.data;
  });
}


//add location to db
const editLocationInDb = (location) => {
  return axios.post('http://localhost:8000/location/edit', { location })
  .then((response) => {
    console.log('database updated with edited location')
    return response.data;
  });
}

const updateLocationPicture = (picture, locationId) => {
  return axios.post('http://localhost:8000/editPicture', { picture, locationId })
    .then((response) => {
      console.log('Database updated with location picture');
      return response.data;
    })
    .catch((error) => {
      console.error('An error occurred while updating location picture:', error);
      throw error;
    });
};

export {
  getTripLocations,
  getLocationTypes,
  deleteLocation,
  addLocationToDb,
  editLocationInDb,
  updateLocationPicture
};