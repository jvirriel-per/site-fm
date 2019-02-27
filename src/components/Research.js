import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Research = () => (
  <Container fluid className="principal align-items-center justify-content-center"> 
  <Row className="contenedor align-items-center "> 
    <Col xs="12 order-1" md="12 order-md-1"  lg="5 order-lg-0">
    <div className="research-first-box">
              <p className="title"><strong>Data analytic tools</strong></p>
              <p className="second-title"><strong>Research or 
              prod, same</strong></p>
             
              <p className="text-1">FM ecosystem includes library for time-series
          analysis. The library provides an easy to use Python
          interface, however, computations are implemented
          in C++ and are assembled prior to execution for 
          optimal performance. You can have the same code
          compute price bars or alpha signals in research and
          production, eliminating duplicate code and helping
          you get from research to production faster. It is
          extendanble so you can easy add you own custom
          computations.  </p>

    </div>
    </Col>
    <Col xs="12" md="12 align-item-center "  lg="7">
    <div className="__research-img">
            <img className="__research-img-children" src={require('../assets/im5.png')} alt="Test"/>
    </div>
    </Col>
  </Row>
  </Container>
)

export default Research;