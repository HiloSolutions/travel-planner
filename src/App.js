import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import MyTrips from './views/MyTrips';
import Trip from './views/Trip';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/trips' element={<MyTrips />} />
        <Route path='/trips/:id/:name' element={<Trip />} />
      </Routes>
    </>
  );
}

export default App;
