import React from 'react';
//import ScrollNavbar from '../assets/navbar';

import Logo from '../assets/Logo-SVG-01.svg';


const Navigation = () => (
<nav className="navbar">
  <div className="nav-container">
      <div className="brand">
        <img src={Logo} alt="FeatureMine"/>
      </div>
      <div className="links">
        <ul>
          <li><a id="link-to-research" href="#research"> ABOUT </a></li>
          <li><a id="link-to-trading" href="#trading"> PRODUCT </a></li>
          <li><a id="link-to-services" href="#services"> PRICING </a></li>
          <li className="bordered"><a> LOGIN </a></li>
          <li className="bordered2"><a> OPEN ACCOUNT </a></li>
        </ul>
      </div>
  </div>
</nav>
);

export default Navigation;