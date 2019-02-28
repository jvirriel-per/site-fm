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
          
            <div className="topnav" >
              <nav className="d-flex align-item-center contenedor m-auto" id="myTopnav">
                <img className="mr-auto ml-xs-2" src={Logo} alt="FeatureMine"/>
                
                  <a href="#" className="hov">ABOUT</a>
                  <a href="#"className="hov">PRODUCT</a>
                  <a href="#"className="hov mr-4">PRICING</a>
                  <a href="#"className="hov mr-2"><strong>LOGIN</strong></a>
                  <a href="#" className="active hov mr-md-2 mr-lg-2">OPEN ACCOUNT</a>
                  <a href="javascript:void(0);" className="icon" onClick={() => responsive()}>
                      <i className="fa fa-bars" />
                  </a>
                
              </nav>  
            </div>
          
        );
    }
}

export default Navigation;