import React, { Component } from 'react';

import img1  from '../../images/ayanatu.jpg'

// Component
import Image from './Image'

class Gallery extends Component {
  render() {
    return (
      <div>
      <Image 
      path={img1}
      style="img1style"
      />
      </div>
    );
  }
}

export default Gallery;