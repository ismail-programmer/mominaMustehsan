import React from 'react';

import "./button.css"

const Button = props => {
  return (
    <div>
      <button className='btn-music'>
        <span className='btnspan'>{props.btn}</span>
      </button>
    </div>
  );
};

export default Button;
