import React from 'react';
import './Back.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Back = ({url}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <button className='back-button' onClick={goBack}>
      <FontAwesomeIcon className='fa-back-arrow' icon={faArrowLeft} />
    </button>
  );
};

export default Back;