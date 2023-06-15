import axios from 'axios';

const updateTripInDatabase = (inputs, id) => {
  return axios.post('http://localhost:8000/trip/update', { inputs, id })
    .then((response) => {
      console.log('database updated with new values')
      return response.data;
    });
};

const getTripData = (id) => {
  return axios.get('http://localhost:8000/trip/',  {
    params: { id }
  })
    .then((response) => {
      return response.data;
    });
}


export { updateTripInDatabase, getTripData };