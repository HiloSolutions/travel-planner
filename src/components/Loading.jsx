import React from 'react';
import loading from '../images/loading.gif';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
