import React from "react";

import "./image.css";

const Image = props => {
  return <img src={props.path} id={props.imgID} className={props.imgClass} alt='beautiful Moments'/>;
};

export default Image;
