import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTAButton.css';


const CTAButton = ({ text, url }) => {
  const navigate = useNavigate();



  return (
    <button
      className='cta-btn'
      onClick={() => navigate(url)}
    >
      {text}
    </button>
  );
};


export default CTAButton;