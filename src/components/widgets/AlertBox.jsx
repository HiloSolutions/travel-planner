import React from 'react';
import './AlertBox.css';
import CTAButton from '../buttons/CTAButton';
import wavingHand from '../../images/waving-hand.png';



const AlertBox = ({
  heading,
  message,
  id,
  url,
  btnText
}) => {

  return (
    <div className='alert-container'>
      <div className='left'>
        <img alt='Attention!' src={wavingHand}></img>
        <h2>{heading}</h2>
        <p>{message}</p>

        <CTAButton
          url={url}
          text={btnText}
        />
      </div>
      <div className='right' id={id}></div>
    </div>
  )
}

export default AlertBox