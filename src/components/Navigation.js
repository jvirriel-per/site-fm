import React, { Component } from 'react';

import Logo from '../assets/logo_blue.svg';


class Navigation extends Component {

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
            <div className="topnav" id="myTopnav">
           
                <img src={Logo} alt="FeatureMine"/>
      
                <a href="#home" class="active">
                    OPEN ACCOUNT
                </a>
                <a href="#news">LOGIN</a>
                <a href="#contact">PRICING</a>
                <a href="#about">PRODUCT</a>
                <a href="#about">ABOUT</a>
                <a href="javascript:void(0);" className="icon" onClick={() => responsive()}>
                    <i className="fa fa-bars" />
                </a>
            </div>
        );
    }
}

export default Navigation;