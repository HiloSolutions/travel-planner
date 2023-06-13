import React from 'react';
import './Back.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Back = ({url}) => {
  return (
    <div className='back-button'>
      <FontAwesomeIcon className='fa-back-arrow' icon={faArrowLeft} />
    </div>
  );
};

export default Back;