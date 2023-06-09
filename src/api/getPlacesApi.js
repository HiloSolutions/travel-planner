import axios from 'axios';

const getPlacesAPI = () => {

  const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';

  const input = 'Paris';
  const inputType = 'textquery';
  const fields = '';
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  

  return axios.get('http://localhost:8000/api/maps/places', {
    params: { 
      input,
      inputType,
      fields,
      key, 
      url 
    }
  })
    .then((res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    })

};

export { getPlacesAPI };