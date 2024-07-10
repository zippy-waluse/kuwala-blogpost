import React from 'react';
import './index.css'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='video-button'>
      {children}
    </button>
  );
};

export default Button;
