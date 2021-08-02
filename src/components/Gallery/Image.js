import React from "react";
import "./image.css";

const Image = props => {
  return (
    <div className="img-container">
      <div className="col-1-of3" id={props.imgId}>
          <a href="#a"><span className='img-close'>&times;</span></a>
        <a href={"#" + props.imgId} className="btn-none">
          <figure className="figure">
            <img
              src={props.imgSrc}
              alt="Beautiful Moments"
              className="img-gallery"
            />
            <figcaption className='fig-caption'>{props.caption}</figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Image;
