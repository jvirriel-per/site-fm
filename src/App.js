import React, { Component } from 'react';

import './App.css';

import Navegacion from './components/Navegacion.js';
//import Navigation from './components/Navigation';
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
        <Navegacion/>  
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
