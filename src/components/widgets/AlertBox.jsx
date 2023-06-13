import React from 'react';
import './AlertBox.css';
import CTAButton from '../buttons/CTAButton';
import wavingHand from '../../waving-hand.png';


const AlertBox = ({url, text}) => {

  return (
    <div className='alert-container'>
      <div className='left'>
        <img alt='Attention!' src={wavingHand}></img>
        <h2>No trips planned... yet!</h2>
        <p>Time to dust off your bags and start planning your next adventure.</p>

        <CTAButton
          url={url}
          text={text}
        />
      </div>
      <div className='right'></div>
    </div>
  )
}

export default AlertBox