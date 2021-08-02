import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Music from './components/Music/Music';
import Gallery from './components/Gallery/Gallery';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';

import Layout from './hoc/layout/Layout';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />

            <Route path='/music' component={Music} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/bio' component={Bio} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
