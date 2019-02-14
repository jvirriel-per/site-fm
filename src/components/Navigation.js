import React, { Component } from 'react';

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
                <a href="#home" className="active">
                    LOGO
                </a>   
                <a href="#news">ABOUT</a>
                <a href="#contact">PRODUCT</a>
                <a href="#about">PRICING</a>
                <a href="#about">LOGIN</a>
                <a href="#about" className="openAccount">OPEN ACCOUNT</a>
                <a href="javascript:void(0);" className="icon" onClick={() => responsive()}>
                    <i className="fa fa-bars" />
                </a>
            </div>    
        );
    }
}

export default Navigation;