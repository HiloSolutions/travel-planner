import axios from 'axios';

const login = () => {
  return axios.get('http://localhost:8000/auth/login')
    .then((response) => {
      console.log('login', response.data);
      return response.data;
    });
}

const logout = () => {
  return axios.get('http://localhost:8000/auth/logout')
  .then((response) => {
    console.log('logout', response.data);
    return response.data;
  });
}

const register = () => {
  return axios.get('http://localhost:8000/auth/register')
  .then((response) => {
    console.log('register', response.data);
    return response.data;
  });
}


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
  updateUserInDb,
  login,
  logout,
  register
 };