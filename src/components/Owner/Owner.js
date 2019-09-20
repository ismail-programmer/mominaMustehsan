import React, { Component } from 'react';


import "./owner.css"

class Owner extends Component {
  render() {
    return (
      <div className="ownerPage">
        <h1 className="owner-name">
          Developed by <a className='owner-a' href="https://www.facebook.com/ismail.sheikh.754918">Muhammad Ismail</a> and <a className='owner-a' href="https://www.facebook.com/adeeb.ahmad.31542">Adeeb Ahmad</a>
        </h1>
      </div>
    );
  }
}

export default Owner;