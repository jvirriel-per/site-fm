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
            <div className="topnav d-flex" id="myTopnav">
           
                <img className="mr-auto ml-4" src={Logo} alt="FeatureMine"/>
     
                <a href="#" className="hov">ABOUT</a>
                <a href="#"className="hov">PRODUCT</a>
                <a href="#"className="hov">PRICING</a>
                <a href="#"className="hov">LOGIN</a>
                <a href="#" className="active mr-2 hov">
                    OPEN ACCOUNT
                </a>
                <a href="javascript:void(0);" className="icon" onClick={() => responsive()}>
                    <i className="fa fa-bars" />
                </a>
            </div>
        );
    }
}

export default Navigation;