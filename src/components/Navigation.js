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
          
            <div className="topnav d-flex align-item-center" id="myTopnav">
           
                <img className="mr-auto" src={Logo} alt="FeatureMine"/>
                
                  <a href="#" className="hov">ABOUT</a>
                  <a href="#"className="hov">PRODUCT</a>
                  <a href="#"className="hov mr-4">PRICING</a>
                  <a href="#"className="hov"><strong>LOGIN</strong></a>
                  <a href="#" className="active hov">
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