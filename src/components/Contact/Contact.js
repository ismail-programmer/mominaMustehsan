import React, { Component } from 'react';

//Css files
import './contact.css';

// utton in utils
import Button from '../../utils/button/Button';

class Contact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='contact-heading'>
          <h1 className='first-heading h1Responsive'>Contact Us</h1>
          <h1 className='heading-2 h1Responsive'>With all your Inbound Needs</h1>
        </div>

        <div className='contact-form'>
          <h3 className='contact-form_heading'>
            Get in Touch to See How We Can Help{' '}
          </h3>

          <form action='/' method='POST'>
            <p className='first'>
              Hello, my name is {' '}
              <input
                className='inputFeild'
                required
                type='text'
                placeholder='First Name'
              />{' '}
              {' '}
              <input
                required
                type='text'
                className='inputFeild'
                placeholder='Last Name'
              />
            </p>
            <p className='second'>
              I am from{' '}
              <input
                type='text'
                placeholder='Country'
                className='inputFeild'
                required
              />{' '}
              and I'd like to speak with you about{' '}
              <input
                name=''
                id=''
                className='inputFeild'
                placeholder='Topic'
                required
              />
            </p>
            <p className='third'>
              You can reach me on my phone{' '}
              <input
                type='number'
                placeholder='XXX-XXX'
                required
                className='inputFeild numberInput'
              />{' '}
              or via email{' '}
              <input
                type='email'
                placeholder='Your Email'
                required
                className='inputFeild'
              />
            </p>
            <div className="btnDiv">
            <Button btn='Send' btnID='btn' spanID='btnspan' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;