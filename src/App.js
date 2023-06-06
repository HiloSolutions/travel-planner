import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Profile from './views/Profile';
import Nav from './components/Nav';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
