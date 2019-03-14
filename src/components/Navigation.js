import React, { Component } from 'react';

import Logo from '../assets/logo_blue.svg';
import Points from '../assets/active.svg';


class Navigation extends Component {
  state = {
    about: false,
    pricing: false,
    login: false
   }

    addImage = (id) => {
    var element = document.getElementById(id);
  }
    render() {
    function responsive() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

        return (
          <div className="d-flex justify-content-center nav">
            <div className="topnav d-flex align-item-center" id="myTopnav">
           
                <img id="logo" src={Logo} alt="FeatureMine"/>
                
                <a href="#" className="hov" id="about" onClick={() => { this.setState({ about: true, pricing: false, login: false})}}>About { this.state.about && <img src={Points} />}</a>
                                
                <a href="#" className="hov" id="pricing" onClick={() => { this.setState({ pricing: true, about: false, login: false})}}>Sales { this.state.pricing && <img src={Points} />}</a>
                
                <a href="#"className="hov" id="login" onClick={() => { this.setState({ pricing: false, about: false, login: true})}}>Support { this.state.login && <img src={Points} />}</a>
                <a href="#" className="active hov" id="account">
                      <strong>Explore</strong>
                  </a>
                  <a href="javascript:void(0);" className="icon" onClick={() => responsive()}>
                      <i className="fa fa-bars" />
                  </a>
                
            </div>
          </div>
        );
    }
}

export default Navigation;