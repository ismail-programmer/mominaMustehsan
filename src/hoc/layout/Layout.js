import React, { Component } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer data={this.props.site} />
      </div>
    );
  }
}

export default Layout;
