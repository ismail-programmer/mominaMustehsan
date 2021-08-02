import React from 'react';

import "./button.css"

const Button = props => {
  return (
    <div className='btn-container'>
      <button className={props.btnID}>
        <span className={props.spanID}>{props.btn}</span>
      </button>
    </div>
  );
};

export default Button;
