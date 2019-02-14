import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Research = () => (
  <div>
    <Row>
      
      <Col xs="12" md="7">
        <div style={{border: '1px solid red', height: '500px'}}>
          <div className="Research-first-box">
              <p className="title"><strong>Data analytic tools</strong></p>
              <h1><strong><p>Reasearch or </p>
              prod, same</strong>
              </h1>
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
        </div>
 
      </Col>
      
      <Col xs="12" md="5">
        <div style={{border: '1px solid blue', height: '500px'}}>
        <div className="__Research-img">
            <img src={require('../assets/im5.png')} alt="Test" width= {null} resizeMode= 'contain' height= {420}/>
          </div>
        </div>
      </Col>
      
    </Row>
  </div>
)

export default Research;