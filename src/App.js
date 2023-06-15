import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import MyTrips from './views/MyTrips';
import Trip from './views/Trip';
import NewTrip from './views/NewTrip';
import NotFound from './views/NotFound';
import { updateUserInDb, getUserData } from './api/userEndpoints';


const App = () => {

  const { user } = useAuth0();
  const [trips, setTrips] = useState([]);


  useEffect(() => {
    if (user) {
      updateUserInDb(user.sub)
        .then(() => {
          getUserData(user.sub)
            .then((res) => {
              setTrips(res);
            })
        })

    }

  }, [user]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home navSearch={true} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/trips' element={<MyTrips trips={trips} />} />
          <Route path='/trips/:id/:name' element={<Trip />} />
          <Route path='/trips/new' element={<NewTrip />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </LocalizationProvider>
  );
}

export default App;
