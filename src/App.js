import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/navigation/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import TripLayout from './layouts/TripLayout';
import MyTrips from './views/MyTrips';
import Trip from './views/Trip';
import NewTrip from './views/NewTrip';
import NotFound from './views/NotFound';


const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/trips' element={<TripLayout />}>
          <Route index element={<MyTrips />} />
          <Route path=':id/:name' element={<Trip />} />
        </Route>
        <Route path='/trips/new' element={<NewTrip />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
