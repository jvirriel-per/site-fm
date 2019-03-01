import React, { Component } from 'react';

import Logo from '../assets/logo_blue.svg';
import Points from '../assets/active.svg';


class Navigation extends Component {
  state = {
    about: false,
    product: false,
    pricing: false
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
          <div className="d-flex justify-content-center">
            <div className="topnav d-flex align-item-center" id="myTopnav">
           
                <img className="mr-auto" src={Logo} alt="FeatureMine"/>
                
                <a href="#" className="hov" id="about" onClick={() => { this.setState({ about: true, product: false, pricing: false})}}>ABOUT { this.state.about && <img src={Points} />}</a>
                
                <a href="#" className="hov" id="product" onClick={() => { this.setState({ product: true, about: false, pricing: false})}}>PRODUCT { this.state.product && <img src={Points} />}</a>
                
                <a href="#" className="hov" id="pricing" onClick={() => { this.setState({ pricing: true, about: false, product:false})}}>PRICING { this.state.pricing && <img src={Points} />}</a>
                
                <a href="#"className="hov mr-2" id="login"><strong>LOGIN</strong></a>
                <a href="#" className="active hov" id="account">
                      OPEN ACCOUNT
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