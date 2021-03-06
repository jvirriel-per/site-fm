import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Featuremine from './components/Featuremine';
import Modular from './components/Modular';
import Setup from './components/Setup';
import Anything from './components/Anything';
import Research from './components/Research';
import Covered from './components/Covered';
import Introspect from './components/Introspect';
import Ecosystem from './components/Ecosystem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>  
        <Featuremine/>
        <Modular/>
        <Setup/>
        <Anything/>
        <Research/>
        <Covered/>
        <Introspect/>
        <Ecosystem/>
      </div>
    );
  }
}

export default App;
