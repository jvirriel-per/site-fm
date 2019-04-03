import React, { Component } from 'react';

import './App.css';

import Navegacion from '../Navegacion.js';
import Head from './Head.js';
import Ourteam from './Ourteam.js';
import Footer from '../Footer.js';

class About extends Component {
  render() {
    return (
      <div className="App">
        <Navegacion/>
        <Head/>
        <Ourteam/>
        <Footer/>
      </div>
        );
    }
}
      
export default About;
      
