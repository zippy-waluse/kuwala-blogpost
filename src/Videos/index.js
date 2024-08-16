import React from 'react';
import './index.css';

const Button = ({ onClick, children }) => {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <button onClick={() => openUrl('https://www.loom.com/share/3cb31c5248c44b489311db78d55c1eb9?sid=d39619b6-eb5c-4c7a-84a7-08de3a4c965a')} className="video-button">
        {children}
        Click to play listen
      </button>
      <button onClick={() => openUrl('https://drive.google.com/file/d/1oxQ1TxDvAuVGLzEq4E7Eu6_9apzC3uip/view?usp=drive_link')} className="video-button">
        {children}
        Listen to podcast
      </button>
    </>
  );
};

export default Button;
