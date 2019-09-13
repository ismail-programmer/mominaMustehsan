import React from 'react';

import './image.css'

const Image = (props) => {
  return (
    <div>
      <img 
     src={props.path} 
    id={props.style}
      />
    </div>
  );
};

export default Image;