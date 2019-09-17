import React, { Component } from 'react';

//? Importing Images

import img3 from '../../images/img23.jpg';
import img4 from '../../images/img24.jpg';
import img17 from '../../images/img25.jpg';
import img6 from '../../images/img26.jpg';
import img7 from '../../images/img27.jpg';
import img8 from '../../images/img28.jpg';
import img9 from '../../images/img9.jpeg';
import img10 from '../../images/img10.jpeg';
import img12 from '../../images/img30.jpg';
import img13 from '../../images/img31.jpg';
import img14 from '../../images/img32.jpg';
import img15 from '../../images/img15.jpeg';
import img16 from '../../images/img33.jpg';
import img18 from '../../images/img35.jpg';
import img19 from '../../images/img12.jpeg';
import img20 from '../../images/img20.jpeg';
import img21 from '../../images/ayanatu.jpg';

// Component
import Image from './Image';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className='composition'>
          <Image path={img9} imgID='composition-photo' imgClass='ph1' />
          <Image path={img10} imgID='composition-photo' imgClass='ph2' />
          <Image path={img15} imgID='composition-photo' imgClass='ph3' />
        </div>
        <div className='composition'>
          <Image path={img16} imgID='composition-photo' imgClass='ph1' />
          <Image path={img6} imgID='composition-photo' imgClass='ph2' />
          <Image path={img21} imgID='composition-photo' imgClass='ph3' />
        </div>
        <div className='composition'>
          <Image path={img7} imgID='composition-photo' imgClass='ph1' />
          <Image path={img8} imgID='composition-photo' imgClass='ph2' />
          <Image path={img12} imgID='composition-photo' imgClass='ph3' />
        </div>
        <div className='composition'>
          <Image path={img13} imgID='composition-photo' imgClass='ph1' />
          <Image path={img16} imgID='composition-photo' imgClass='ph2' />
          <Image path={img4} imgID='composition-photo' imgClass='ph3' />
        </div>

        <div className=''>
          <Image path={img13} imgID='' />
          <Image path={img14} imgID='' />
          <Image path={img3} imgID='' />
        </div>
        <div className=''>
          <Image path={img16} imgID='' />
          <Image path={img17} imgID='' />
          <Image path={img18} imgID='' />
        </div>
        <div className=''>
          <Image path={img19} imgID='' />
          <Image path={img20} imgID='' />
          <Image path={img4} imgID='' />
        </div>
      </div>
    );
  }
}

export default Gallery;
