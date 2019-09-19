import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Music from './components/Music/Music';
// import Gallery from './components/Gallery/Gallery';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

// !css files
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />

        <Route path='/home' component={Home} />
        <Route path='/music' component={Music} />

        {/* <Route path='/gallery' component={Gallery} /> */}
        <Route path='/bio' component={Bio} />

        <Route path='/contact' component={Contact} />

        <Route path='/header' component={Header} />
        <Route path='/footer' component={Footer} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
