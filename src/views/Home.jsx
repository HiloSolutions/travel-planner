import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';
import homeCover from '../images/home-cover.jpg';
import Nav from '../components/navigation/Nav';
import Loading from '../components/Loading';


const Home = ({ navSearch }) => {
  const { isLoading } = useAuth0();


  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>

      <Nav navSearch={navSearch} />
      <div className="cover-image">
        <img src={homeCover} alt="Header" />
      </div>


      <main>
        <section>
          <h2>Featured destinations</h2>
          <div className="destination">
            <img src="destination1.jpg" alt="Destination" />
            <div className="destination-info">
              <h3>New York</h3>
              <p>Find great places to stay and explore the city that never sleeps.</p>
            </div>
          </div>
          <div className="destination">
            <img src="destination2.jpg" alt="Destination" />
            <div className="destination-info">
              <h3>Paris</h3>
              <p>Discover romance and art in the city of love.</p>
            </div>
          </div>
          <div className="destination">
            <img src="destination3.jpg" alt="Destination" />
            <div className="destination-info">
              <h3>Tokyo</h3>
              <p>Experience the blending of traditional and modern in this vibrant city.</p>
            </div>
          </div>
        </section>
      </main>
    </div>


  );
};

export default Home