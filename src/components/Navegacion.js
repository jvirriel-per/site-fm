import React from 'react';
import { Container, Navbar, Nav, Brand,Toggle, Collapse, NavDropdown, Item, Divider,} from 'react-bootstrap';
import Logo from '../assets/logo_blue.svg';
import { BrowserRouter, Route, Link } from "react-router-dom";


const Navegacion = () => (
  <div className="navegacion">
<Navbar collapseOnSelect expand="lg" className="container-fluid">
  <Navbar.Brand href="#home" className="mr-auto"><img id="logo" src={Logo} alt="FeatureMine"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ml-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="#Sales">Sales</Nav.Link>
      <Nav.Link href="#Support">Support</Nav.Link>
      <Nav.Link eventKey={2} href="#Explore" className="explore">
        Explore
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)

export default Navegacion;