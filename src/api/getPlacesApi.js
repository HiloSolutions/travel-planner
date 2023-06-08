import axios from 'axios';

const getPlacesAPI = () => {

  return axios.get('http://localhost:8000/api/maps/places')
    .then((res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    })

};

export { getPlacesAPI };