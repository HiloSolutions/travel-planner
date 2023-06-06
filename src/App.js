import './App.css';
import { Route } from "react-router-dom";
import Nav from './components/Nav';
import LoginButton from './components/buttons/LoginButton';
import LogoutButton from './components/buttons/LogoutButton';
import Profile from './views/Profile';
function App() {
  return (
    <div className="body">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
