import './App.css';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './auth/protected-route';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import TripLayout from './layouts/TripLayout';
import MyTrips from './views/MyTrips';
import Trip from './views/Trip';
import NewTrip from './views/NewTrip';
import NotFound from './views/NotFound';


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/profile'
          element={
            <Profile />
          }
        />
        <Route path='/trips' element={<TripLayout />}>
          <Route index element={<MyTrips />} />
          <Route path=':id/:name' element={<Trip />} />
          <Route path='new' element={<NewTrip />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
