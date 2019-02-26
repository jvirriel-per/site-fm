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
     
                <a href="#" className="mr-4">ABOUT</a>
                <a href="#">PRODUCT</a>
                <a href="#">PRICING</a>
                <a href="#">LOGIN</a>
                <a href="#" class="active mr-2">
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