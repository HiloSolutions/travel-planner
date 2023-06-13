import axios from 'axios';


const getUserData = (sub) => {
  return axios.get('http://localhost:8000/api/user/getData', {
    params: { sub }
  })
    .then((response) => {
      return response.data;
    });
};

const updateUserInDb = (sub) => {
  return axios.post('http://localhost:8000/api/user/update', null, {
    params: { sub }
  })
    .then((res) => {
      return res.data;
    });
};

export { 
  getUserData,
  updateUserInDb
 };