import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import image from '../../../images/gmail.png';
class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <a className='footer-a hidden' href='#header'>
          {' '}
          <div className='arrow'> &uarr;</div>
        </a>
        <div className='rows'>
          <div className='col-1-of2 full'>
            <h1 className='footer-h1 singer-name'>Momina Mustehsan</h1>
          </div>
          <div className='col-1-of2'>
            <div className="hidden">
              <h1 className='footer-h1'>Contact</h1>

              <p>
                <a
                  className='footer-a-2'
                  href='info.momina.mustehsan@gmail.com'
                >
                  <img className='footer-icon' width='25' src={image} alt='' />{' '}
                  info.momina.mustehsan@gmail.com
                </a>
              </p>
              <p>
                <a
                  className='footer-a-2'
                  href='mominamustehsan.infoamerica@gmail.com'
                >
                  <img className='footer-icon' width='25' src={image} alt='' />{' '}
                  mominamustehsan.infoamerica@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='rows rows-1'>
          <Link className='footer-a-2 contact-link hidden' to='/contact'>
            <div className='contact-page hidden'>
              Go to Contact Page <span className='footer-span'>&rarr;</span>
            </div>
          </Link>
          <div className='col-1-of2 textCopyright '>
            <div className='copyright '>
              <p>&copy;2019 . All rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
