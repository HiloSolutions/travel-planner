import axios from 'axios';

const checkIfUserExists = () => {
  return axios.get('http://localhost:8000/api/user/check')
    .then((response) => {
      console.log('getting user data HI', response.data);
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
  checkIfUserExists,
  updateUserInDb
 };